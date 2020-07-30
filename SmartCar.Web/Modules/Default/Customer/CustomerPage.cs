
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Customer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class CustomerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Customer/CustomerIndex.cshtml");
        }

        public ActionResult AddData()
        {
            return View("~/Modules/Default/CustomerAddData/Index.cshtml");
        }

        public ActionResult SendData()
        {
            return View("~/Modules/Default/CustomerSendData/Index.cshtml");
        }

    }
}