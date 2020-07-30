using Serenity.Navigation;
using MyPages = SmartCar.Default.Pages;

[assembly: NavigationLink(2000, "Dữ liệu", typeof(MyPages.CustomerController), icon: "fa-database", Title = "Dữ liệu")]
[assembly: NavigationLink(2100, "Thống kê", typeof(MyPages.DashboardAdminController), icon: "fa-tachometer", Title = "Thống kê")]
[assembly: NavigationLink(3000, "Nhập dữ liệu", typeof(MyPages.CustomerController), action: "AddData", icon: "fa-plus", Title = "Nhập dữ liệu")]
[assembly: NavigationLink(4000, "Chia dữ liệu", typeof(MyPages.CustomerController), action: "SendData", icon: "fa-send", Title = "Chia dữ liệu")]
[assembly: NavigationLink(4000, "Dữ liệu cá nhân", typeof(MyPages.CustomerBySaleIdController), icon: "fa-database", Title = "Dữ liệu cá nhân")]
//[assembly: NavigationLink(4100, "Tra cứu dữ liệu", typeof(MyPages.CustomerBySaleIdSearchController), icon: "fa-search", Title = "Tra cứu dữ liệu")]
[assembly: NavigationMenu(8000, "Danh mục", icon: "fa-list")]
[assembly: NavigationLink(8100, "Danh mục/Status", typeof(MyPages.StatusController), icon: "fa-list", Title = "Trạng thái")]
[assembly: NavigationLink(9100, "Administration/Quản lý nhóm", typeof(MyPages.GroupsController), icon: "fa-users", Title = "Quản lý nhóm")]
[assembly: NavigationLink(9200, "Administration/Trạng thái đơn hàng", typeof(MyPages.OrderStatusController), icon: "fa-car", Title = "Trạng thái đơn hàng")]
[assembly: NavigationLink(9200, "Administration/Nhà mạng", typeof(MyPages.NetworkController), icon: "fa-car", Title = "Nhà mạng")]
//[assembly: NavigationLink(int.MaxValue, "Default/Network", typeof(MyPages.NetworkController), icon: null)]