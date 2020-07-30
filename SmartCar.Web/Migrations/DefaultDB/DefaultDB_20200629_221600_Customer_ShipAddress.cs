using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200629221600)]
    public class DefaultDB_20200629_221600_Customer_ShipAddress : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Customer")
                    .AddColumn("ShipAddress").AsString(1000).Nullable()
                    .AddColumn("NetworkName").AsString(100).Nullable()
                    .AddColumn("DateOfRegistry").AsInt32().Nullable()
                    .AddColumn("MonthOfRegistry").AsInt32().Nullable();
        }
    }
}