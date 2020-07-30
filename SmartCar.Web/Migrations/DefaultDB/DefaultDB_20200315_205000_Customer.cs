using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200315205000)]
    public class DefaultDB_20200315_205000_Customer : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Customer", "CustomerId", s => s
                 .WithColumn("Name").AsString(50).Nullable()
                 .WithColumn("Mobile").AsString(20).Nullable()
                 .WithColumn("CarCode").AsString(20).NotNullable()
                 .WithColumn("Address").AsString().Nullable()
                 .WithColumn("DateRegistry").AsDateTime().Nullable()
                 .WithColumn("StatusId").AsInt64().Nullable()
                    .ForeignKey("FK_Customer_StatusId", "Status", "StatusId")
                .WithColumn("ImageRegistryPath").AsString(255).Nullable()
                .WithColumn("SaleNote").AsString(1000).Nullable()
                .WithColumn("SaleDate").AsDateTime().Nullable()
                .WithColumn("LeaderUserId").AsInt32().Nullable()
                    .ForeignKey("FK_Customer_LeaderUserId", "Users", "UserId")
                .WithColumn("SaleUserId").AsInt32().Nullable()
                    .ForeignKey("FK_Customer_SaleUserId", "Users", "UserId")
                .WithColumn("ExpirationDate").AsDateTimeOffset().Nullable()
                 );
        }
    }
}