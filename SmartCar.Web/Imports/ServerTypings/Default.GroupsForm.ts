namespace SmartCar.Default {
    export interface GroupsForm {
        GroupName: Serenity.StringEditor;
    }

    export class GroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Groups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GroupsForm.init)  {
                GroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(GroupsForm, [
                    'GroupName', w0
                ]);
            }
        }
    }
}

