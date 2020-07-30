
namespace SmartCar.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/GroupUsers"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GroupUsersRow))]
    public class GroupUsersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/GroupUsers/GroupUsersIndex.cshtml");
        }
    }
}