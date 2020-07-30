
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Groups"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GroupsRow))]
    public class GroupsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Groups/GroupsIndex.cshtml");
        }
    }
}