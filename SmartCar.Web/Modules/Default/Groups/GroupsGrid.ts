
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class GroupsGrid extends Serenity.EntityGrid<GroupsRow, any> {
        protected getColumnsKey() { return 'Default.Groups'; }
        protected getDialogType() { return GroupsDialog; }
        protected getIdProperty() { return GroupsRow.idProperty; }
        protected getInsertPermission() { return GroupsRow.insertPermission; }
        protected getLocalTextPrefix() { return GroupsRow.localTextPrefix; }
        protected getService() { return GroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}