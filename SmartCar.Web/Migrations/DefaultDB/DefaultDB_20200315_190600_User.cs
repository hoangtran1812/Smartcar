using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200315190600)]
    public class DefaultDB_20200315_190600_User : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                    .AddColumn("GroupId").AsInt64().Nullable()
                    .ForeignKey("FK_Users_GroupId", "Groups", "GroupId");
        }
    }
}