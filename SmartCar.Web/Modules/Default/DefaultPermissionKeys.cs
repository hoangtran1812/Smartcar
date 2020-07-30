
using Serenity.Extensibility;
using System.ComponentModel;

namespace SmartCar.Default
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [DisplayName("Dữ liệu")]
        public class Customer
        {
            [ImplicitPermission(Status.View), ImplicitPermission(OrderStatus.Modify), ImplicitPermission(View)]
            public const string Delete = "Default:Customer:Delete";
            public const string Insert = "Default:Customer:Insert";
            public const string Modify = "Default:Customer:Modify";
            public const string View = "Default:Customer:View";
        }

        [DisplayName("Trạng thái")]
        public class Status
        {
            public const string Delete = "Default:Status:Delete";
            public const string Insert = "Default:Status:Insert";
            public const string Modify = "Default:Status:Modify";
            public const string View = "Default:Status:View";
        }

        [DisplayName("Dữ liệu cá nhân")]
        public class CustomerBySaleId
        {
            public const string Modify = "Default:CustomerBySaleId:Modify";
        }

        [Description("Chung")]
        public const string General = "Default:General";

        [DisplayName("Trạng thái đơn hàng")]
        public class OrderStatus
        {
            public const string Modify = "Default:OrderStatus:Modify";
        }

        [DisplayName("Thống kê")]
        public class DashboardAdmin
        {
            public const string Modify = "Default:DashboardAdmin:Modify";
        }
    }
}
