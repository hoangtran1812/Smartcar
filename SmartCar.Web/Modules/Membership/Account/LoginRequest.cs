
namespace SmartCar.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Account")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Password"), Required(true)]
        public string Password { get; set; }
    }
}