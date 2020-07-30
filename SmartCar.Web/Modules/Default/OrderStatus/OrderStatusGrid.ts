
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class OrderStatusGrid extends Serenity.EntityGrid<OrderStatusRow, any> {
        protected getColumnsKey() { return 'Default.OrderStatus'; }
        protected getDialogType() { return OrderStatusDialog; }
        protected getIdProperty() { return OrderStatusRow.idProperty; }
        protected getInsertPermission() { return OrderStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return OrderStatusRow.localTextPrefix; }
        protected getService() { return OrderStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}