
namespace SmartCar.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                Default.Entities.CustomerRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = Default.Entities.CustomerRow.Fields;
                    using (var connection = SqlConnections.NewFor<Default.Entities.CustomerRow>())
                    {
                        model.KhongNgheMay = connection.Count<Default.Entities.CustomerRow>(o.StatusId == 1 && o.SaleUserUsername == User.Identity.Name);
                        model.KhongCoNhuCau = connection.Count<Default.Entities.CustomerRow>(o.StatusId == 2 && o.SaleUserUsername == User.Identity.Name);
                        model.DongYMuaHang = connection.Count<Default.Entities.CustomerRow>(o.StatusId == 3 && o.SaleUserUsername == User.Identity.Name);
                        model.HenGoiLai = connection.Count<Default.Entities.CustomerRow>(o.StatusId == 4 && o.SaleUserUsername == User.Identity.Name);
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
