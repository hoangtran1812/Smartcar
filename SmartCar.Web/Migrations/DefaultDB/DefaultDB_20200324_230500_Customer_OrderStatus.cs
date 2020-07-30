using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200324230500)]
    public class DefaultDB_20200324_230500_Customer_OrderStatus : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("OrderStatus", "Id", s => s
                .WithColumn("Name").AsString(50).NotNullable());

            Insert.IntoTable("OrderStatus").Row(new
            {
                Name = "Đang ship"
            });

            Insert.IntoTable("OrderStatus").Row(new
            {
                Name = "Giao thành công"
            });

            Insert.IntoTable("OrderStatus").Row(new
            {
                Name = "Đổi"
            });

            Insert.IntoTable("OrderStatus").Row(new
            {
                Name = "Hoàn"
            });            
        }
    }
}