namespace SmartCar.Default {
    export interface StatusRow {
        StatusId?: number;
        StatusName?: string;
    }

    export namespace StatusRow {
        export const idProperty = 'StatusId';
        export const nameProperty = 'StatusName';
        export const localTextPrefix = 'Default.Status';
        export const lookupKey = 'Default.Status';

        export function getLookup(): Q.Lookup<StatusRow> {
            return Q.getLookup<StatusRow>('Default.Status');
        }
        export const deletePermission = 'Default:Status:Delete';
        export const insertPermission = 'Default:Status:Insert';
        export const readPermission = 'Default:Status:View';
        export const updatePermission = 'Default:Status:Modify';

        export declare const enum Fields {
            StatusId = "StatusId",
            StatusName = "StatusName"
        }
    }
}

