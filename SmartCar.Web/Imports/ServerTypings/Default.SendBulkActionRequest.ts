namespace SmartCar.Default {
    export interface SendBulkActionRequest extends Serenity.ServiceRequest {
        CustomerIds?: number[];
        SaleId?: number;
    }
}

