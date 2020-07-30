
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class OrderStatusDialog extends Serenity.EntityDialog<OrderStatusRow, any> {
        protected getFormKey() { return OrderStatusForm.formKey; }
        protected getIdProperty() { return OrderStatusRow.idProperty; }
        protected getLocalTextPrefix() { return OrderStatusRow.localTextPrefix; }
        protected getNameProperty() { return OrderStatusRow.nameProperty; }
        protected getService() { return OrderStatusService.baseUrl; }
        protected getDeletePermission() { return OrderStatusRow.deletePermission; }
        protected getInsertPermission() { return OrderStatusRow.insertPermission; }
        protected getUpdatePermission() { return OrderStatusRow.updatePermission; }

        protected form = new OrderStatusForm(this.idPrefix);

    }
}