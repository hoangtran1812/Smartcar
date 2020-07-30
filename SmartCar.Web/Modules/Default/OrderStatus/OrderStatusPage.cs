
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/OrderStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderStatusRow))]
    public class OrderStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/OrderStatus/OrderStatusIndex.cshtml");
        }
    }
}