
namespace SmartCar.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.GroupUsers")]
    [BasedOnRow(typeof(Entities.GroupUsersRow), CheckNames = true)]
    public class GroupUsersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 GroupUserId { get; set; }
        public String GroupGroupName { get; set; }
        public String UserUsername { get; set; }
    }
}