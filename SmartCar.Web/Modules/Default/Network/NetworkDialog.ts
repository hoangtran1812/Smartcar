
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class NetworkDialog extends Serenity.EntityDialog<NetworkRow, any> {
        protected getFormKey() { return NetworkForm.formKey; }
        protected getIdProperty() { return NetworkRow.idProperty; }
        protected getLocalTextPrefix() { return NetworkRow.localTextPrefix; }
        protected getNameProperty() { return NetworkRow.nameProperty; }
        protected getService() { return NetworkService.baseUrl; }
        protected getDeletePermission() { return NetworkRow.deletePermission; }
        protected getInsertPermission() { return NetworkRow.insertPermission; }
        protected getUpdatePermission() { return NetworkRow.updatePermission; }

        protected form = new NetworkForm(this.idPrefix);

    }
}