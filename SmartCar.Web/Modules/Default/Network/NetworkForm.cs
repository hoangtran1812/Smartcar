
namespace SmartCar.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Network")]
    [BasedOnRow(typeof(Entities.NetworkRow), CheckNames = true)]
    public class NetworkForm
    {
        public String Name { get; set; }
    }
}