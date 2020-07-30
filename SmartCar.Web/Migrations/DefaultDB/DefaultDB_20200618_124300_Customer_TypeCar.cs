using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200618124300)]
    public class DefaultDB_20200618_124300_Customer_TypeCar : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Customer")
                    .AddColumn("SeatNumber").AsInt64().Nullable()
                    .AddColumn("TypeCar").AsString(50).Nullable()
                    .AddColumn("Discount").AsFloat().Nullable();
        }
    }
}