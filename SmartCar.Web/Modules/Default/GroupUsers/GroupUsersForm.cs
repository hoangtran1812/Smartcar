
namespace SmartCar.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.GroupUsers")]
    [BasedOnRow(typeof(Entities.GroupUsersRow), CheckNames = true)]
    public class GroupUsersForm
    {
        public Int64 GroupId { get; set; }
        public Int32 UserId { get; set; }
    }
}