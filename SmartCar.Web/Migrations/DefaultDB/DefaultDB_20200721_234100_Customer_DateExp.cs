using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200721234100)]
    public class DefaultDB_20200721_234100_Customer_DateExp : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Customer")
                    .AddColumn("DateExp").AsInt32().Nullable()
                    .AddColumn("MonthExp").AsInt32().Nullable();
        }
    }
}