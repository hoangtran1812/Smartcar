
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class GroupsDialog extends Serenity.EntityDialog<GroupsRow, any> {
        protected getFormKey() { return GroupsForm.formKey; }
        protected getIdProperty() { return GroupsRow.idProperty; }
        protected getLocalTextPrefix() { return GroupsRow.localTextPrefix; }
        protected getNameProperty() { return GroupsRow.nameProperty; }
        protected getService() { return GroupsService.baseUrl; }
        protected getDeletePermission() { return GroupsRow.deletePermission; }
        protected getInsertPermission() { return GroupsRow.insertPermission; }
        protected getUpdatePermission() { return GroupsRow.updatePermission; }

        protected form = new GroupsForm(this.idPrefix);

    }
}