
namespace SmartCar.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Customer]")]
    [DisplayName("Dữ liệu"), InstanceName("Dữ liệu")]
    [ReadPermission(PermissionKeys.CustomerBySaleId.Modify)]
    [InsertPermission(PermissionKeys.CustomerBySaleId.Modify)]
    [ModifyPermission(PermissionKeys.CustomerBySaleId.Modify)]
    [DeletePermission(PermissionKeys.CustomerBySaleId.Modify)]
    [LookupScript]
    public sealed class CustomerBySaleIdRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Identity]
        public Int64? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Họ tên"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Điện thoại"), Size(20), QuickSearch]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Biển số xe"), Size(20), NotNull, QuickSearch]
        public String CarCode
        {
            get { return Fields.CarCode[this]; }
            set { Fields.CarCode[this] = value; }
        }

        [DisplayName("Địa chỉ"), Size(255),Hidden]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Ngày đăng kiểm"),DisplayFormat("d")]
        public DateTime? DateRegistry
        {
            get { return Fields.DateRegistry[this]; }
            set { Fields.DateRegistry[this] = value; }
        }

        [DisplayName("Trạng thái"), ForeignKey(typeof(StatusRow)), LeftJoin("jStatus")]
        [LookupEditor(typeof(StatusRow), InplaceAdd = true)]
        public Int64? StatusId
        {
            get { return Fields.StatusId[this]; }
            set { Fields.StatusId[this] = value; }
        }

        [DisplayName("Image Registry Path"), Size(255),Hidden]
        public String ImageRegistryPath
        {
            get { return Fields.ImageRegistryPath[this]; }
            set { Fields.ImageRegistryPath[this] = value; }
        }

        [DisplayName("Ghi chú"), Size(1000),]
        public String SaleNote
        {
            get { return Fields.SaleNote[this]; }
            set { Fields.SaleNote[this] = value; }
        }

        [DisplayName("Ngày bán bảo hiểm"),DisplayFormat("d")]
        public DateTime? SaleDate
        {
            get { return Fields.SaleDate[this]; }
            set { Fields.SaleDate[this] = value; }
        }

        [DisplayName("Leader User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jLeaderUser")]
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        public Int32? LeaderUserId
        {
            get { return Fields.LeaderUserId[this]; }
            set { Fields.LeaderUserId[this] = value; }
        }

        [DisplayName("Sale User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jSaleUser")]
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        public Int32? SaleUserId
        {
            get { return Fields.SaleUserId[this]; }
            set { Fields.SaleUserId[this] = value; }
        }

        [DisplayName("Expiration Date"),DisplayFormat("g")]
        public DateTime? ExpirationDate
        {
            get { return Fields.ExpirationDate[this]; }
            set { Fields.ExpirationDate[this] = value; }
        }

        [DisplayName("Trạng thái"), Expression("jStatus.[StatusName]"), LookupInclude]
        public String StatusName
        {
            get { return Fields.StatusName[this]; }
            set { Fields.StatusName[this] = value; }
        }

        [DisplayName("Giá bán"), AlignRight]
        public Int64? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Leader User Username"), Expression("jLeaderUser.[Username]")]
        public String LeaderUserUsername
        {
            get { return Fields.LeaderUserUsername[this]; }
            set { Fields.LeaderUserUsername[this] = value; }
        }

        [DisplayName("Leader User Display Name"), Expression("jLeaderUser.[DisplayName]")]
        public String LeaderUserDisplayName
        {
            get { return Fields.LeaderUserDisplayName[this]; }
            set { Fields.LeaderUserDisplayName[this] = value; }
        }

        [DisplayName("Leader User Email"), Expression("jLeaderUser.[Email]")]
        public String LeaderUserEmail
        {
            get { return Fields.LeaderUserEmail[this]; }
            set { Fields.LeaderUserEmail[this] = value; }
        }

        [DisplayName("Leader User Source"), Expression("jLeaderUser.[Source]")]
        public String LeaderUserSource
        {
            get { return Fields.LeaderUserSource[this]; }
            set { Fields.LeaderUserSource[this] = value; }
        }

        [DisplayName("Leader User Password Hash"), Expression("jLeaderUser.[PasswordHash]")]
        public String LeaderUserPasswordHash
        {
            get { return Fields.LeaderUserPasswordHash[this]; }
            set { Fields.LeaderUserPasswordHash[this] = value; }
        }

        [DisplayName("Leader User Password Salt"), Expression("jLeaderUser.[PasswordSalt]")]
        public String LeaderUserPasswordSalt
        {
            get { return Fields.LeaderUserPasswordSalt[this]; }
            set { Fields.LeaderUserPasswordSalt[this] = value; }
        }

        [DisplayName("Leader User Last Directory Update"), Expression("jLeaderUser.[LastDirectoryUpdate]")]
        public DateTime? LeaderUserLastDirectoryUpdate
        {
            get { return Fields.LeaderUserLastDirectoryUpdate[this]; }
            set { Fields.LeaderUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Leader User User Image"), Expression("jLeaderUser.[UserImage]")]
        public String LeaderUserUserImage
        {
            get { return Fields.LeaderUserUserImage[this]; }
            set { Fields.LeaderUserUserImage[this] = value; }
        }

        [DisplayName("Leader User Insert Date"), Expression("jLeaderUser.[InsertDate]")]
        public DateTime? LeaderUserInsertDate
        {
            get { return Fields.LeaderUserInsertDate[this]; }
            set { Fields.LeaderUserInsertDate[this] = value; }
        }

        [DisplayName("Leader User Insert User Id"), Expression("jLeaderUser.[InsertUserId]")]
        public Int32? LeaderUserInsertUserId
        {
            get { return Fields.LeaderUserInsertUserId[this]; }
            set { Fields.LeaderUserInsertUserId[this] = value; }
        }

        [DisplayName("Leader User Update Date"), Expression("jLeaderUser.[UpdateDate]")]
        public DateTime? LeaderUserUpdateDate
        {
            get { return Fields.LeaderUserUpdateDate[this]; }
            set { Fields.LeaderUserUpdateDate[this] = value; }
        }

        [DisplayName("Leader User Update User Id"), Expression("jLeaderUser.[UpdateUserId]")]
        public Int32? LeaderUserUpdateUserId
        {
            get { return Fields.LeaderUserUpdateUserId[this]; }
            set { Fields.LeaderUserUpdateUserId[this] = value; }
        }

        [DisplayName("Leader User Is Active"), Expression("jLeaderUser.[IsActive]")]
        public Int16? LeaderUserIsActive
        {
            get { return Fields.LeaderUserIsActive[this]; }
            set { Fields.LeaderUserIsActive[this] = value; }
        }

        [DisplayName("Leader User Group Id"), Expression("jLeaderUser.[GroupId]")]
        public Int64? LeaderUserGroupId
        {
            get { return Fields.LeaderUserGroupId[this]; }
            set { Fields.LeaderUserGroupId[this] = value; }
        }

        [DisplayName("Sale User Username"), Expression("jSaleUser.[Username]")]
        public String SaleUserUsername
        {
            get { return Fields.SaleUserUsername[this]; }
            set { Fields.SaleUserUsername[this] = value; }
        }

        [DisplayName("Sale User Display Name"), Expression("jSaleUser.[DisplayName]")]
        public String SaleUserDisplayName
        {
            get { return Fields.SaleUserDisplayName[this]; }
            set { Fields.SaleUserDisplayName[this] = value; }
        }

        [DisplayName("Sale User Email"), Expression("jSaleUser.[Email]")]
        public String SaleUserEmail
        {
            get { return Fields.SaleUserEmail[this]; }
            set { Fields.SaleUserEmail[this] = value; }
        }

        [DisplayName("Sale User Source"), Expression("jSaleUser.[Source]")]
        public String SaleUserSource
        {
            get { return Fields.SaleUserSource[this]; }
            set { Fields.SaleUserSource[this] = value; }
        }

        [DisplayName("Sale User Password Hash"), Expression("jSaleUser.[PasswordHash]")]
        public String SaleUserPasswordHash
        {
            get { return Fields.SaleUserPasswordHash[this]; }
            set { Fields.SaleUserPasswordHash[this] = value; }
        }

        [DisplayName("Sale User Password Salt"), Expression("jSaleUser.[PasswordSalt]")]
        public String SaleUserPasswordSalt
        {
            get { return Fields.SaleUserPasswordSalt[this]; }
            set { Fields.SaleUserPasswordSalt[this] = value; }
        }

        [DisplayName("Sale User Last Directory Update"), Expression("jSaleUser.[LastDirectoryUpdate]")]
        public DateTime? SaleUserLastDirectoryUpdate
        {
            get { return Fields.SaleUserLastDirectoryUpdate[this]; }
            set { Fields.SaleUserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Sale User User Image"), Expression("jSaleUser.[UserImage]")]
        public String SaleUserUserImage
        {
            get { return Fields.SaleUserUserImage[this]; }
            set { Fields.SaleUserUserImage[this] = value; }
        }

        [DisplayName("Sale User Insert Date"), Expression("jSaleUser.[InsertDate]")]
        public DateTime? SaleUserInsertDate
        {
            get { return Fields.SaleUserInsertDate[this]; }
            set { Fields.SaleUserInsertDate[this] = value; }
        }

        [DisplayName("Sale User Insert User Id"), Expression("jSaleUser.[InsertUserId]")]
        public Int32? SaleUserInsertUserId
        {
            get { return Fields.SaleUserInsertUserId[this]; }
            set { Fields.SaleUserInsertUserId[this] = value; }
        }

        [DisplayName("Sale User Update Date"), Expression("jSaleUser.[UpdateDate]")]
        public DateTime? SaleUserUpdateDate
        {
            get { return Fields.SaleUserUpdateDate[this]; }
            set { Fields.SaleUserUpdateDate[this] = value; }
        }

        [DisplayName("Sale User Update User Id"), Expression("jSaleUser.[UpdateUserId]")]
        public Int32? SaleUserUpdateUserId
        {
            get { return Fields.SaleUserUpdateUserId[this]; }
            set { Fields.SaleUserUpdateUserId[this] = value; }
        }

        [DisplayName("Sale User Is Active"), Expression("jSaleUser.[IsActive]")]
        public Int16? SaleUserIsActive
        {
            get { return Fields.SaleUserIsActive[this]; }
            set { Fields.SaleUserIsActive[this] = value; }
        }

        [DisplayName("Sale User Group Id"), Expression("jSaleUser.[GroupId]")]
        public Int64? SaleUserGroupId
        {
            get { return Fields.SaleUserGroupId[this]; }
            set { Fields.SaleUserGroupId[this] = value; }
        }

        [DisplayName("Is Leader Sent"),Hidden]
        public Boolean? IsLeaderSent
        {
            get { return Fields.IsLeaderSent[this]; }
            set { Fields.IsLeaderSent[this] = value; }
        }

        [DisplayName("Modified Date"), Hidden]
        public DateTime? ModifiedDate
        {
            get { return Fields.ModifiedDate[this]; }
            set { Fields.ModifiedDate[this] = value; }
        }

        [DisplayName("Sale update Date"), Hidden]
        public DateTime? SaleUpdateDate
        {
            get { return Fields.SaleUpdateDate[this]; }
            set { Fields.SaleUpdateDate[this] = value; }
        }
        [DisplayName("Seat number"), Hidden]
        public Int64? SeatNumber
        {
            get { return Fields.SeatNumber[this]; }
            set { Fields.SeatNumber[this] = value; }
        }
        [DisplayName("Discount"), Hidden]
        public Double? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }
        [DisplayName("Type car"), Hidden]
        public String TypeCar
        {
            get { return Fields.TypeCar[this]; }
            set { Fields.TypeCar[this] = value; }
        }
        [DisplayName("Ship address")]
        public String ShipAddress
        {
            get { return Fields.ShipAddress[this]; }
            set { Fields.ShipAddress[this] = value; }
        }

        [DisplayName("Network Name"), ForeignKey(typeof(NetworkRow)), LeftJoin("jNetworkName"), SortOrder(1, true)]
        [LookupEditor(typeof(NetworkRow), InplaceAdd = true)]
        public String NetworkName
        {
            get { return Fields.NetworkName[this]; }
            set { Fields.NetworkName[this] = value; }
        }
        [DisplayName("Nhà mạng"), Expression("jNetworkName.[Name]"), LookupInclude]
        public String NetworkNameName
        {
            get { return Fields.NetworkNameName[this]; }
            set { Fields.NetworkNameName[this] = value; }
        }
        [DisplayName("DateOfRegistry"), Hidden]
        public Int32? DateOfRegistry
        {
            get { return Fields.DateOfRegistry[this]; }
            set { Fields.DateOfRegistry[this] = value; }
        }
        [DisplayName("MonthOfRegistry"), Hidden]
        public Int32? MonthOfRegistry
        {
            get { return Fields.MonthOfRegistry[this]; }
            set { Fields.MonthOfRegistry[this] = value; }
        }
        [DisplayName("DateExp"), Hidden]
        public Int32? DateExp
        {
            get { return Fields.DateExp[this]; }
            set { Fields.DateExp[this] = value; }
        }
        [DisplayName("MonthExp"), Hidden]
        public Int32? MonthExp
        {
            get { return Fields.MonthExp[this]; }
            set { Fields.MonthExp[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerBySaleIdRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field CustomerId;
            public StringField Name;
            public StringField Mobile;
            public StringField CarCode;
            public StringField Address;
            public DateTimeField DateRegistry;
            public Int64Field StatusId;
            public StringField ImageRegistryPath;
            public StringField SaleNote;
            public DateTimeField SaleDate;
            public Int32Field LeaderUserId;
            public Int32Field SaleUserId;
            public DateTimeField ExpirationDate;
            public Int64Field Price;
            public BooleanField IsLeaderSent;
            public DateTimeField ModifiedDate;
            public DateTimeField SaleUpdateDate;
            public Int64Field SeatNumber;
            public StringField TypeCar;
            public DoubleField Discount;
            public StringField ShipAddress;
            public StringField NetworkName;
            public Int32Field DateOfRegistry;
            public Int32Field MonthOfRegistry;
            public Int32Field DateExp;
            public Int32Field MonthExp;
            public StringField NetworkNameName;

            public StringField StatusName;

            public StringField LeaderUserUsername;
            public StringField LeaderUserDisplayName;
            public StringField LeaderUserEmail;
            public StringField LeaderUserSource;
            public StringField LeaderUserPasswordHash;
            public StringField LeaderUserPasswordSalt;
            public DateTimeField LeaderUserLastDirectoryUpdate;
            public StringField LeaderUserUserImage;
            public DateTimeField LeaderUserInsertDate;
            public Int32Field LeaderUserInsertUserId;
            public DateTimeField LeaderUserUpdateDate;
            public Int32Field LeaderUserUpdateUserId;
            public Int16Field LeaderUserIsActive;
            public Int64Field LeaderUserGroupId;

            public StringField SaleUserUsername;
            public StringField SaleUserDisplayName;
            public StringField SaleUserEmail;
            public StringField SaleUserSource;
            public StringField SaleUserPasswordHash;
            public StringField SaleUserPasswordSalt;
            public DateTimeField SaleUserLastDirectoryUpdate;
            public StringField SaleUserUserImage;
            public DateTimeField SaleUserInsertDate;
            public Int32Field SaleUserInsertUserId;
            public DateTimeField SaleUserUpdateDate;
            public Int32Field SaleUserUpdateUserId;
            public Int16Field SaleUserIsActive;
            public Int64Field SaleUserGroupId;
        }
    }
}
