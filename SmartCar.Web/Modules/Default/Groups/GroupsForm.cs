
namespace SmartCar.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Groups")]
    [BasedOnRow(typeof(Entities.GroupsRow), CheckNames = true)]
    public class GroupsForm
    {
        public String GroupName { get; set; }
    }
}