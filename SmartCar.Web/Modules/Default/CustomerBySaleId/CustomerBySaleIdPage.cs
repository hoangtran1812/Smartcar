
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using SmartCar.Default.Entities;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("Default/CustomerBySaleId"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerBySaleIdRow))]
    public class CustomerBySaleIdController : Controller
    {
        public ActionResult Index()
        {
            //return View("~/Modules/Default/CustomerBySaleId/CustomerBySaleIdIndex.cshtml");
            //return View("~/Modules/Default/CustomerBySaleId/ViewDataSingle.cshtml");
            
            var model = new DashboardPageModel();
            List<CustomerRow> arrcustomer =new List<CustomerRow>();
            var o = Entities.CustomerRow.Fields;
            string[] ViettelArray = { "086", "096", "097", "098", "032", "033", "034", "035", "036", "037", "038", "039" };
            string[] VinaphoneArray = { "091", "094", "088", "083", "084", "085", "081", "082"};
            string[] MobiphoneArray = { "089", "090", "093", "070", "079", "077", "076", "078" };
            string[] VnmobileArray = { "092", "056", "058"};
            string[] GmobileArray = { "099", "059"};

            using (var connection = SqlConnections.NewFor<Entities.CustomerRow>())
            {
                arrcustomer = connection.List<CustomerRow>(q => q
                        .Select(o.CustomerId, o.DateRegistry,o.Name,o.Mobile,o.Address,o.CarCode)
                        .Where(o.IsLeaderSent == "True" && o.SaleUserUsername == User.Identity.Name && o.StatusId == 5));                
            }
            if (arrcustomer.Count == 0)
            {
                return View("~/Modules/Default/CustomerBySaleId/ViewNoData.cshtml", model);
            }
            else
            {
                model.CustomerID = arrcustomer[0].CustomerId.ToString();
                model.Name = arrcustomer[0].Name;
                model.Mobile = arrcustomer[0].Mobile;
                model.Address = arrcustomer[0].Address;
                model.CarCode = arrcustomer[0].CarCode;
                model.DateRegistry = arrcustomer[0].DateRegistry.ToStringDefault("dd/MM/yyyy");
                string dauSo = model.Mobile.Substring(0, 3);
                if (ContainAnyOf(dauSo, ViettelArray)) { model.NetworkName = "Viettel"; }
                if (ContainAnyOf(dauSo, VinaphoneArray)) { model.NetworkName = "Vinaphone"; }
                if (ContainAnyOf(dauSo, MobiphoneArray)) { model.NetworkName = "Mobiphone"; }
                if (ContainAnyOf(dauSo, VnmobileArray)) { model.NetworkName = "VietnamMobile"; }
                if (ContainAnyOf(dauSo, GmobileArray)) { model.NetworkName = "Gmobile"; }
                return View("~/Modules/Default/CustomerBySaleId/ViewDataSingle.cshtml", model);
            }
        }
        public bool ContainAnyOf(string word, string[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                if (word.Contains(array[i]))
                {
                    return true;
                }
            }
            return false;
        }
    }

    public class DashboardPageModel
    {
        public string CustomerID { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string CarCode { get; set; }
        public string Address { get; set; }
        public string DateRegistry { get; set; }
        public string NetworkName { get; set; }
    }
}