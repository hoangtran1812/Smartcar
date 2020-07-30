
namespace SmartCar.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CustomerBySaleId")]
    [BasedOnRow(typeof(Entities.CustomerBySaleIdRow), CheckNames = true)]
    public class CustomerBySaleIdForm
    {
        public String Name { get; set; }
        public String Mobile { get; set; }
        public String CarCode { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Address { get; set; }
        [DisplayFormat("g")]
        public DateTime DateRegistry { get; set; }
        public Int64 StatusId { get; set; }
        public String ImageRegistryPath { get; set; }
        public Int64 Price { get; set; }

        [TextAreaEditor(Rows = 4)]
        public String SaleNote { get; set; }
        public DateTime SaleDate { get; set; }
    }
}