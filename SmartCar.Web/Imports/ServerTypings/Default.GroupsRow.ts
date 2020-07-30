namespace SmartCar.Default {
    export interface GroupsRow {
        GroupId?: number;
        GroupName?: string;
    }

    export namespace GroupsRow {
        export const idProperty = 'GroupId';
        export const nameProperty = 'GroupName';
        export const localTextPrefix = 'Default.Groups';
        export const lookupKey = 'Default.Groups';

        export function getLookup(): Q.Lookup<GroupsRow> {
            return Q.getLookup<GroupsRow>('Default.Groups');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            GroupId = "GroupId",
            GroupName = "GroupName"
        }
    }
}

