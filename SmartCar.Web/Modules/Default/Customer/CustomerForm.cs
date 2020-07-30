
namespace SmartCar.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        public String Name { get; set; }
        public String Mobile { get; set; }
        public String CarCode { get; set; }
        [TextAreaEditor(Rows = 3),Visible(true)]
        public String Address { get; set; }
        [DisplayFormat("g")]
        public DateTime DateRegistry { get; set; }
        public Int64 StatusId { get; set; }
        public String ImageRegistryPath { get; set; }
        public Int64 Price { get; set; }

        [TextAreaEditor(Rows = 8)]
        public String SaleNote { get; set; }
        public DateTime SaleDate { get; set; }
        public Int32 LeaderUserId { get; set; }
        public Int32 SaleUserId { get; set; }
        public DateTime ExpirationDate { get; set; }
        public Boolean IsLeaderSent { get; set; }
        public DateTime ModifiedDate { get; set; }
        public String ShipAddress { get; set; }
        public String NetworkName { get; set; }
        public Int32 DateExp { get; set; }
        public Int32 MonthExp { get; set; }
    }
}