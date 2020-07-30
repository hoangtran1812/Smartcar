namespace SmartCar.Default {
    export namespace DefaultService {
        export const baseUrl = 'Default/Default';

        export declare function SendBulkAction(request: SendBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            SendBulkAction = "Default/Default/SendBulkAction"
        }

        [
            'SendBulkAction'
        ].forEach(x => {
            (<any>DefaultService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

