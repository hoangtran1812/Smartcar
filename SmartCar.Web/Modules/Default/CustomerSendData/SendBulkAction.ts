/// <reference path="../../Common/Helpers/BulkServiceAction.ts" />

namespace SmartCar.Default {
    
    @Serenity.Decorators.registerClass()
    export class SendBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests() {
            return 10;
        }

        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize() {
            return 5;
        }

        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs 
         * that should be processed in this service call.
         */
        protected convertArray(myArray) {
            let ctm: Array<number> = [];
            var num: number = 0
            var myArr = myArray.split(',');
            for (num =0; num < myArr.length; num++) {
                ctm.push(Q.parseInteger(myArr[num]));
            }
            return ctm;
        }
        protected executeForBatch(batch) {
            CustomerSendDataBulkService.SendBulkAction(
                {
                    CustomerIds: this.convertArray(batch[0]),
                    SaleId: Q.parseInteger(batch[1])
                },
                response => this.set_successCount(this.get_successCount() + this.convertArray(batch[0]).length),
                {
                    blockUI: false,
                    onError: response => this.set_errorCount(this.get_errorCount() + this.convertArray(batch[0]).length),
                    onCleanup: () => this.serviceCallCleanup()
                });
        }
    }
}