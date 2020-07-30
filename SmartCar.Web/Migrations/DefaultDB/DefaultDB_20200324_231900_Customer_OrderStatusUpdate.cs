using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200324231900)]
    public class DefaultDB_20200324_231900_Customer_OrderStatusUpdate : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Customer")
                    .AddColumn("OrderStatusId").AsInt64().Nullable()
                    .ForeignKey("FK_Customer_OrderStatus", "OrderStatus", "Id");
        }
    }
}