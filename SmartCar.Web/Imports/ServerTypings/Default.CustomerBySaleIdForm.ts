namespace SmartCar.Default {
    export interface CustomerBySaleIdForm {
        Name: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        CarCode: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        DateRegistry: Serenity.DateEditor;
        StatusId: Serenity.LookupEditor;
        ImageRegistryPath: Serenity.StringEditor;
        Price: Serenity.StringEditor;
        SaleNote: Serenity.TextAreaEditor;
        SaleDate: Serenity.DateEditor;
    }

    export class CustomerBySaleIdForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CustomerBySaleId';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerBySaleIdForm.init)  {
                CustomerBySaleIdForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(CustomerBySaleIdForm, [
                    'Name', w0,
                    'Mobile', w0,
                    'CarCode', w0,
                    'Address', w1,
                    'DateRegistry', w2,
                    'StatusId', w3,
                    'ImageRegistryPath', w0,
                    'Price', w0,
                    'SaleNote', w1,
                    'SaleDate', w2
                ]);
            }
        }
    }
}

