using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200629233900)]
    public class DefaultDB_20200629_233900_Customer_NetworkName : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Network", "Id", s => s
                .WithColumn("Name").AsString(50).NotNullable());

            Insert.IntoTable("Network").Row(new
            {
                Name = "Viettel"
            });

            Insert.IntoTable("Network").Row(new
            {
                Name = "Vinaphone"
            });

            Insert.IntoTable("Network").Row(new
            {
                Name = "Mobiphone"
            });

            Insert.IntoTable("Network").Row(new
            {
                Name = "VietnamMobile"
            });
            Insert.IntoTable("Network").Row(new
            {
                Name = "Gmobile"
            });
        }
    }
}