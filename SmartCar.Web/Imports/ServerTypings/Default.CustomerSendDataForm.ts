namespace SmartCar.Default {
    export interface CustomerSendDataForm {
        SaleUserId: Serenity.LookupEditor;
    }

    export class CustomerSendDataForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CustomerSendData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerSendDataForm.init)  {
                CustomerSendDataForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(CustomerSendDataForm, [
                    'SaleUserId', w0
                ]);
            }
        }
    }
}

