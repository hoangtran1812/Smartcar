
namespace SmartCar.Default {    
    @Serenity.Decorators.registerClass()
    export class CustomerBySaleIdDialog extends Serenity.EntityDialog<CustomerBySaleIdRow, any> {
        protected getFormKey() { return CustomerBySaleIdForm.formKey; }
        protected getIdProperty() { return CustomerBySaleIdRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerBySaleIdRow.localTextPrefix; }
        protected getNameProperty() { return CustomerBySaleIdRow.nameProperty; }
        protected getService() { return CustomerBySaleIdService.baseUrl; }
        protected getDeletePermission() { return CustomerBySaleIdRow.deletePermission; }
        protected getInsertPermission() { return CustomerBySaleIdRow.insertPermission; }
        protected getUpdatePermission() { return CustomerBySaleIdRow.updatePermission; }

        protected form = new CustomerBySaleIdForm(this.idPrefix);

    }
}