using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200319234600)]
    public class DefaultDB_20200319_234600_Customer_Modified : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Customer")
                    .AddColumn("IsLeaderSent").AsBoolean().Nullable().WithDefaultValue(false)
                    .AddColumn("ModifiedDate").AsDateTime().Nullable();
        }
    }
}