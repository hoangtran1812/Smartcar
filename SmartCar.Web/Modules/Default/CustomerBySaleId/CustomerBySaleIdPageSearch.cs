
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using SmartCar.Default.Entities;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("Default/CustomerBySaleIdSearch"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerBySaleIdRow))]
    public class CustomerBySaleIdSearchController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CustomerBySaleId/CustomerBySaleIdIndex.cshtml");            
        }
    }
}