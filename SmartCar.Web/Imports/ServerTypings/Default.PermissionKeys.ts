namespace SmartCar.Default {
    declare namespace PermissionKeys {
        export const General = "Default:General";

        namespace Customer {
            export const Delete = "Default:Customer:Delete";
            export const Insert = "Default:Customer:Insert";
            export const Modify = "Default:Customer:Modify";
            export const View = "Default:Customer:View";
        }

        namespace Status {
            export const Delete = "Default:Status:Delete";
            export const Insert = "Default:Status:Insert";
            export const Modify = "Default:Status:Modify";
            export const View = "Default:Status:View";
        }

        namespace CustomerBySaleId {
            export const Modify = "Default:CustomerBySaleId:Modify";
        }

        namespace OrderStatus {
            export const Modify = "Default:OrderStatus:Modify";
        }

        namespace DashboardAdmin {
            export const Modify = "Default:DashboardAdmin:Modify";
        }
    }
}

