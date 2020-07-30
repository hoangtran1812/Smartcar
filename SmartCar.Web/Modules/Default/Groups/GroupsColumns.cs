
namespace SmartCar.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Groups")]
    [BasedOnRow(typeof(Entities.GroupsRow), CheckNames = true)]
    public class GroupsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 GroupId { get; set; }
        [EditLink,DisplayName("Nhóm")]
        public String GroupName { get; set; }
    }
}