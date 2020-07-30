
namespace SmartCar.Default.Endpoints
{
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using MyRepository = Repositories.CustomerRepository;
    using MyRow = Entities.CustomerRow;

    [RoutePrefix("Services/Default/CustomerAddData"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CustomerAddDataController : ServiceEndpoint
    {
        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var p = Entities.CustomerRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            string[] ViettelArray = { "086", "096", "097", "098", "032", "033", "034", "035", "036", "037", "038", "039" };
            string[] VinaphoneArray = { "091", "094", "088", "083", "084", "085", "081", "082" };
            string[] MobiphoneArray = { "089", "090", "093", "070", "079", "077", "076", "078" };
            string[] VnmobileArray = { "092", "056", "058" };
            string[] GmobileArray = { "099", "059" };

            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var carCode = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    if (carCode.IsTrimmedEmpty())
                        continue;

                    var customer = uow.Connection.TryFirst<Entities.CustomerRow>(q => q
                        .Select(p.CustomerId,p.StatusId)
                        .Where(p.CarCode == carCode));

                    if (customer == null)
                        customer = new Entities.CustomerRow
                        {
                            CarCode = carCode
                        };
                    else
                    {
                        // avoid assignment errors
                        customer.TrackWithChecks = false;
                    }

                    customer.Name = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    customer.Mobile = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    customer.Address = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                    if (!String.IsNullOrEmpty(customer.Mobile))
                    {
                        string dauSo = customer.Mobile.Substring(0, 3);
                        if (ContainAnyOf(dauSo, ViettelArray)) { customer.NetworkName = "1"; }
                        if (ContainAnyOf(dauSo, VinaphoneArray)) { customer.NetworkName = "2"; }
                        if (ContainAnyOf(dauSo, MobiphoneArray)) { customer.NetworkName = "3"; }
                        if (ContainAnyOf(dauSo, VnmobileArray)) { customer.NetworkName = "4"; }
                        if (ContainAnyOf(dauSo, GmobileArray)) { customer.NetworkName = "5"; }
                    }
                    //fix khi import du lieu vao mac dinh la Cho goi
                    if (customer.StatusId == null)
                    {
                        customer.StatusId = 5;
                    }
                    try
                    {
                        if (Convert.ToDateTime(worksheet.Cells[row, 5].Value) != null)
                        {
                            customer.DateRegistry = Convert.ToDateTime(worksheet.Cells[row, 5].Value);
                        }
                    }
                    catch { }

                    if (customer.CustomerId == null)
                    {
                        new Repositories.CustomerRepository().Create(uow, new SaveRequest<MyRow>
                        {
                            Entity = customer
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new Repositories.CustomerRepository().Update(uow, new SaveRequest<MyRow>
                        {
                            Entity = customer,
                            EntityId = customer.CustomerId.Value
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }
        public bool ContainAnyOf(string word, string[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                string str = array[i];
                if (word.StartsWith(str))
                {
                    return true;
                }
                //so sanh voi nhung dau so ko co so 0
                string strNo = str.Substring(1, 2);
                if (word.StartsWith(strNo))
                {
                    return true;
                }
            }
            return false;
        }
    }
}
