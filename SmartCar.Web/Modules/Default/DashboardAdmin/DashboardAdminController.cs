
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("Default/DashboardAdmin"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class DashboardAdminController : Controller
    {
        public ActionResult Index()
        {
            var cachedModel = new DashboardAdminPageModel();
            using (var connection = SqlConnections.NewFor<Administration.Entities.UserRow>())
            {
                var o = Entities.CustomerRow.Fields;
                DateTime dtNow = DateTime.Now;
                Administration.Repositories.UserRepository ur = new Administration.Repositories.UserRepository();
                List<Administration.Entities.UserRow> request = connection.List<Administration.Entities.UserRow>(new Criteria(Administration.Entities.UserRow.Fields.Username)!= "admin");
                foreach(Administration.Entities.UserRow usr in request)
                {
                    DateTime dauNgay = new DateTime(dtNow.Year,dtNow.Month,dtNow.Day,0,0,0);
                    DateTime cuoiNgay = dauNgay.AddDays(1).AddMinutes(-1);
                    int userId = (usr.UserId!= null? Convert.ToInt32(usr.UserId) :0);
                    //remove o.IsLeaderSent == Boolean.TrueString && to statistics
                    var daNhan = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.ModifiedDate >= dauNgay && o.ModifiedDate < cuoiNgay);
                    var daXuLy = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.SaleUpdateDate >= dauNgay && o.SaleUpdateDate < cuoiNgay);
                    var khongNgheMay = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull()&& o.StatusId == 1 && o.SaleUpdateDate >= dauNgay && o.SaleUpdateDate < cuoiNgay);
                    var khongCoNhuCau = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 2 && o.SaleUpdateDate >= dauNgay && o.SaleUpdateDate < cuoiNgay);
                    var henGoiLai = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 4 && o.SaleUpdateDate >= dauNgay && o.SaleUpdateDate < cuoiNgay);
                    var dongYMuaHang = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 3 && o.SaleUpdateDate >= dauNgay && o.SaleUpdateDate < cuoiNgay);
                    cachedModel.DuLieuNgay += string.Format(@"<tr>
                            <td>{0}</td>
                            <td>{1}</td>
                            <td>{2}</td>
                            <td>{3}</td>
                            <td>{4}</td>
                            <td>{5}</td>
                            <td>{6}</td>
                        </tr>",usr.Username,daNhan,daXuLy,khongNgheMay,khongCoNhuCau,henGoiLai,dongYMuaHang);

                    DateTime dauTuan = dtNow.StartOfWeek(DayOfWeek.Monday);
                    DateTime cuoiTuan = dtNow.StartOfWeek(DayOfWeek.Sunday);

                    daNhan = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.ModifiedDate>=dauTuan && o.ModifiedDate <cuoiTuan);
                    daXuLy = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.SaleUpdateDate >= dauTuan && o.SaleUpdateDate < cuoiTuan);
                    khongNgheMay = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 1 && o.SaleUpdateDate >= dauTuan && o.SaleUpdateDate < cuoiTuan);
                    khongCoNhuCau = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 2 && o.SaleUpdateDate >= dauTuan && o.SaleUpdateDate < cuoiTuan);
                    henGoiLai = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 4 && o.SaleUpdateDate >= dauTuan && o.SaleUpdateDate < cuoiTuan);
                    dongYMuaHang = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 3 && o.SaleUpdateDate >= dauTuan && o.SaleUpdateDate < cuoiTuan);
                    cachedModel.DuLieuTuan += string.Format(@"<tr>
                            <td>{0}</td>
                            <td>{1}</td>
                            <td>{2}</td>
                            <td>{3}</td>
                            <td>{4}</td>
                            <td>{5}</td>
                            <td>{6}</td>
                        </tr>", usr.Username, daNhan, daXuLy, khongNgheMay, khongCoNhuCau, henGoiLai, dongYMuaHang);

                    DateTime dauThang = new DateTime(dtNow.Year, dtNow.Month,1);
                    DateTime cuoiThang = dauThang.AddMonths(1).AddDays(-1);

                    daNhan = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.ModifiedDate >= dauThang && o.ModifiedDate < cuoiThang);
                    daXuLy = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.SaleUpdateDate >= dauThang && o.SaleUpdateDate < cuoiThang);
                    khongNgheMay = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 1 && o.SaleUpdateDate >= dauThang && o.SaleUpdateDate < cuoiThang);
                    khongCoNhuCau = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 2 && o.SaleUpdateDate >= dauThang && o.SaleUpdateDate < cuoiThang);
                    henGoiLai = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 4 && o.SaleUpdateDate >= dauThang && o.SaleUpdateDate < cuoiThang);
                    dongYMuaHang = connection.Count<Entities.CustomerRow>(o.SaleUserId == userId && o.SaleUpdateDate.IsNotNull() && o.StatusId == 3 && o.SaleUpdateDate >= dauThang && o.SaleUpdateDate < cuoiThang);
                    cachedModel.DuLieuThang += string.Format(@"<tr>
                            <td>{0}</td>
                            <td>{1}</td>
                            <td>{2}</td>
                            <td>{3}</td>
                            <td>{4}</td>
                            <td>{5}</td>
                            <td>{6}</td>
                        </tr>", usr.Username, daNhan, daXuLy, khongNgheMay, khongCoNhuCau, henGoiLai, dongYMuaHang);
                }
            }
            return View(MVC.Views.Default.DashboardAdmin.DashboardIndex, cachedModel);
        }
    }
    public static class DateTimeExtensions
    {
        public static DateTime StartOfWeek(this DateTime dt, DayOfWeek startOfWeek)
        {
            int diff = (7 + (dt.DayOfWeek - startOfWeek)) % 7;
            return dt.AddDays(-1 * diff).Date;
        }
    }
}
