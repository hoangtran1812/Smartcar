/// <reference path="SendBulkAction.ts" />
namespace SmartCar.Default {

    @Serenity.Decorators.registerClass()
    export class CustomerSendDataDialog extends Serenity.PropertyDialog<any, any> {

        private form: CustomerSendDataForm;
        CustomerIds: string[];

        constructor(CustomerIds: string[]) {
            super();
            this.CustomerIds = CustomerIds;
            this.form = new CustomerSendDataForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Chọn người ";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Chia',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;
                        var action = new SendBulkAction();
                        action.done = () => this.dialogClose();
                        action.execute([this.CustomerIds.toString(), this.form.SaleUserId.value]);
                    },
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ];
        }
    }
}