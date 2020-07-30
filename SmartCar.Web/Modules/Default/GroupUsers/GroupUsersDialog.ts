
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class GroupUsersDialog extends Serenity.EntityDialog<GroupUsersRow, any> {
        protected getFormKey() { return GroupUsersForm.formKey; }
        protected getIdProperty() { return GroupUsersRow.idProperty; }
        protected getLocalTextPrefix() { return GroupUsersRow.localTextPrefix; }
        protected getService() { return GroupUsersService.baseUrl; }
        protected getDeletePermission() { return GroupUsersRow.deletePermission; }
        protected getInsertPermission() { return GroupUsersRow.insertPermission; }
        protected getUpdatePermission() { return GroupUsersRow.updatePermission; }

        protected form = new GroupUsersForm(this.idPrefix);

    }
}