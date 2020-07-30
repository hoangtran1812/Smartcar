
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Status"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StatusRow))]
    public class StatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Status/StatusIndex.cshtml");
        }
    }
}