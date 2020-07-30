
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class GroupUsersGrid extends Serenity.EntityGrid<GroupUsersRow, any> {
        protected getColumnsKey() { return 'Default.GroupUsers'; }
        protected getDialogType() { return GroupUsersDialog; }
        protected getIdProperty() { return GroupUsersRow.idProperty; }
        protected getInsertPermission() { return GroupUsersRow.insertPermission; }
        protected getLocalTextPrefix() { return GroupUsersRow.localTextPrefix; }
        protected getService() { return GroupUsersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}