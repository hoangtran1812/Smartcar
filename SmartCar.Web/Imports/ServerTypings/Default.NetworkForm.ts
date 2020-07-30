namespace SmartCar.Default {
    export interface NetworkForm {
        Name: Serenity.StringEditor;
    }

    export class NetworkForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Network';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NetworkForm.init)  {
                NetworkForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(NetworkForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

