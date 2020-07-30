
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Network"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NetworkRow))]
    public class NetworkController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Network/NetworkIndex.cshtml");
        }
    }
}