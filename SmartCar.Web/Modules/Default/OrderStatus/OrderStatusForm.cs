
namespace SmartCar.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OrderStatus")]
    [BasedOnRow(typeof(Entities.OrderStatusRow), CheckNames = true)]
    public class OrderStatusForm
    {
        public String Name { get; set; }
    }
}