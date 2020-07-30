
namespace SmartCar.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Status")]
    [BasedOnRow(typeof(Entities.StatusRow), CheckNames = true)]
    public class StatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 StatusId { get; set; }
        [EditLink,DisplayName("Trạng thái")]
        public String StatusName { get; set; }
    }
}