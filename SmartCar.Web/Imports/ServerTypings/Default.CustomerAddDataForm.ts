namespace SmartCar.Default {
    export interface CustomerAddDataForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class CustomerAddDataForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CustomerAddData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerAddDataForm.init)  {
                CustomerAddDataForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(CustomerAddDataForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

