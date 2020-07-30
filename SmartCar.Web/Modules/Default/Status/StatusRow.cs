
namespace SmartCar.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Status]")]
    [DisplayName("Trạng thái"), InstanceName("Trạng thái")]
    [ReadPermission(PermissionKeys.Status.View)]
    [InsertPermission(PermissionKeys.Status.Insert)]
    [ModifyPermission(PermissionKeys.Status.Modify)]
    [DeletePermission(PermissionKeys.Status.Delete)]
    [LookupScript]
    public sealed class StatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Status Id"), Identity]
        public Int64? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [DisplayName("Trạng thái"), Size(50), NotNull, QuickSearch]
        public String StatusName
        {
            get { return Fields.StatusName[this]; }
            set { Fields.StatusName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StatusName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field StatusId;
            public StringField StatusName;
        }
    }
}
