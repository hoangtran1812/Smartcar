namespace SmartCar.Default {
    export interface CustomerForm {
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
        LeaderUserId: Serenity.LookupEditor;
        SaleUserId: Serenity.LookupEditor;
        ExpirationDate: Serenity.DateEditor;
        IsLeaderSent: Serenity.BooleanEditor;
        ModifiedDate: Serenity.DateEditor;
        ShipAddress: Serenity.StringEditor;
        NetworkName: Serenity.LookupEditor;
        DateExp: Serenity.IntegerEditor;
        MonthExp: Serenity.IntegerEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.IntegerEditor;

                Q.initFormType(CustomerForm, [
                    'Name', w0,
                    'Mobile', w0,
                    'CarCode', w0,
                    'Address', w1,
                    'DateRegistry', w2,
                    'StatusId', w3,
                    'ImageRegistryPath', w0,
                    'Price', w0,
                    'SaleNote', w1,
                    'SaleDate', w2,
                    'LeaderUserId', w3,
                    'SaleUserId', w3,
                    'ExpirationDate', w2,
                    'IsLeaderSent', w4,
                    'ModifiedDate', w2,
                    'ShipAddress', w0,
                    'NetworkName', w3,
                    'DateExp', w5,
                    'MonthExp', w5
                ]);
            }
        }
    }
}

