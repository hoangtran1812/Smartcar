namespace SmartCar.Default {
    export namespace CustomerAddDataService {
        export const baseUrl = 'Default/CustomerAddData';

        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            ExcelImport = "Default/CustomerAddData/ExcelImport"
        }

        [
            'ExcelImport'
        ].forEach(x => {
            (<any>CustomerAddDataService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

