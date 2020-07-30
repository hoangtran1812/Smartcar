namespace SmartCar.Default {
    export interface GroupUsersForm {
        GroupId: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class GroupUsersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.GroupUsers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GroupUsersForm.init)  {
                GroupUsersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(GroupUsersForm, [
                    'GroupId', w0,
                    'UserId', w1
                ]);
            }
        }
    }
}

