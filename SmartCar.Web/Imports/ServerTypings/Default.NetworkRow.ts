namespace SmartCar.Default {
    export interface NetworkRow {
        Id?: number;
        Name?: string;
    }

    export namespace NetworkRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Network';
        export const lookupKey = 'Default.Network';

        export function getLookup(): Q.Lookup<NetworkRow> {
            return Q.getLookup<NetworkRow>('Default.Network');
        }
        export const deletePermission = 'Default:Status:Delete';
        export const insertPermission = 'Default:Status:Insert';
        export const readPermission = 'Default:Status:View';
        export const updatePermission = 'Default:Status:Modify';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}

