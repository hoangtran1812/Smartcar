
namespace SmartCar.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Status")]
    [BasedOnRow(typeof(Entities.StatusRow), CheckNames = true)]
    public class StatusForm
    {
        public String StatusName { get; set; }
    }
}