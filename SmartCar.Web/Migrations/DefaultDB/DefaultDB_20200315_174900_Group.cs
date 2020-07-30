using FluentMigrator;

namespace SmartCar.Migrations.DefaultDB
{
    [Migration(20200315174900)]
    public class DefaultDB_20200315_174900_Group : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Groups", "GroupId", s => s
                .WithColumn("GroupName").AsString(50).NotNullable());

            this.CreateTableWithId64("GroupUsers", "GroupUserId", s => s
                .WithColumn("GroupId").AsInt64().NotNullable()
                    .ForeignKey("FK_GroupUsers_GroupId", "Groups", "GroupId")
                .WithColumn("UserId").AsInt32().NotNullable()
                    .ForeignKey("FK_GroupUsers_UserId", "Users", "UserId"));

            Create.Index("UQ_GroupUsers_GroupId_UserId")
                .OnTable("GroupUsers")
                .OnColumn("GroupId").Ascending()
                .OnColumn("UserId").Ascending()
                .WithOptions().Unique();

            Create.Index("UQ_GroupUsers_UserId_GroupId")
                .OnTable("GroupUsers")
                .OnColumn("UserId").Ascending()
                .OnColumn("GroupId").Ascending()
                .WithOptions().Unique();

            this.CreateTableWithId64("Status", "StatusId", s => s
                .WithColumn("StatusName").AsString(50).NotNullable());

            Insert.IntoTable("Status").Row(new
            {
                StatusName = "Không nghe máy"
            });

            Insert.IntoTable("Status").Row(new
            {
                StatusName = "Không có nhu cầu"
            });

            Insert.IntoTable("Status").Row(new
            {
                StatusName = "Đồng ý mua hàng"
            });

            Insert.IntoTable("Status").Row(new
            {
                StatusName = "Hẹn gọi lại"
            });

        }
    }
}