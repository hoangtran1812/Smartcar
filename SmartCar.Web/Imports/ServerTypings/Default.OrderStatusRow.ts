namespace SmartCar.Default {
    export interface OrderStatusRow {
        Id?: number;
        Name?: string;
    }

    export namespace OrderStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.OrderStatus';
        export const lookupKey = 'Default.OrderStatus';

        export function getLookup(): Q.Lookup<OrderStatusRow> {
            return Q.getLookup<OrderStatusRow>('Default.OrderStatus');
        }
        export const deletePermission = 'Default:OrderStatus:Modify';
        export const insertPermission = 'Default:OrderStatus:Modify';
        export const readPermission = 'Default:OrderStatus:Modify';
        export const updatePermission = 'Default:OrderStatus:Modify';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}

