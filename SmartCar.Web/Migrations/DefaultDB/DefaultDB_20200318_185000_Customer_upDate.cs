using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200318185000)]
    public class DefaultDB_20200318_185000_Customer_upDate : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Customer")
                    .AddColumn("Price").AsInt64().Nullable();
        }
    }
}