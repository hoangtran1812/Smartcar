
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class NetworkGrid extends Serenity.EntityGrid<NetworkRow, any> {
        protected getColumnsKey() { return 'Default.Network'; }
        protected getDialogType() { return NetworkDialog; }
        protected getIdProperty() { return NetworkRow.idProperty; }
        protected getInsertPermission() { return NetworkRow.insertPermission; }
        protected getLocalTextPrefix() { return NetworkRow.localTextPrefix; }
        protected getService() { return NetworkService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}