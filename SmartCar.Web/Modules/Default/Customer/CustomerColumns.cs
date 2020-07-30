
namespace SmartCar.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 CustomerId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Mobile { get; set; }
        public String CarCode { get; set; }
        public String Address { get; set; }
        
        public DateTime DateRegistry { get; set; }
        [EditLink(ItemType = "Default.Status", IdField = "StatusId"), Width(150)]
        [LookupEditor(typeof(Entities.StatusRow)), QuickFilter]
        public String StatusName { get; set; }
        
        public String ImageRegistryPath { get; set; }
        public String SaleNote { get; set; }        
        public Int64 Price { get; set; }
        public DateTime SaleDate { get; set; }
        [Hidden]
        public String LeaderUserUsername { get; set; }
        [Hidden]
        public String SaleUserUsername { get; set; }
        [Hidden]
        public DateTime ExpirationDate { get; set; }
        [Hidden]
        public Boolean IsLeaderSent { get; set; }
        [Hidden]
        public DateTime ModifiedDate { get; set; }
        [EditLink(ItemType = "Default.Network", IdField = "NetworkName"), Width(150)]
        [LookupEditor(typeof(Entities.NetworkRow)), QuickFilter]
        public String NetworkNameName { get; set; }
    }
}