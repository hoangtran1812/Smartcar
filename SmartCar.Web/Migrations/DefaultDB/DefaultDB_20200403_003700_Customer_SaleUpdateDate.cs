using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200403003700)]
    public class DefaultDB_20200403_003700_Customer_SaleUpdateDate : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Customer")                    
                    .AddColumn("SaleUpdateDate").AsDateTime().Nullable();
        }
    }
}