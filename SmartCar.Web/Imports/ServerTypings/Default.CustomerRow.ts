namespace SmartCar.Default {
    export interface CustomerRow {
        CustomerId?: number;
        Name?: string;
        Mobile?: string;
        CarCode?: string;
        Address?: string;
        DateRegistry?: string;
        StatusId?: number;
        ImageRegistryPath?: string;
        SaleNote?: string;
        SaleDate?: string;
        LeaderUserId?: number;
        SaleUserId?: number;
        ExpirationDate?: string;
        Price?: number;
        IsLeaderSent?: boolean;
        ModifiedDate?: string;
        SaleUpdateDate?: string;
        SeatNumber?: number;
        TypeCar?: string;
        Discount?: number;
        ShipAddress?: string;
        NetworkName?: string;
        DateOfRegistry?: number;
        MonthOfRegistry?: number;
        DateExp?: number;
        MonthExp?: number;
        NetworkNameName?: string;
        StatusName?: string;
        LeaderUserUsername?: string;
        LeaderUserDisplayName?: string;
        LeaderUserEmail?: string;
        LeaderUserSource?: string;
        LeaderUserPasswordHash?: string;
        LeaderUserPasswordSalt?: string;
        LeaderUserLastDirectoryUpdate?: string;
        LeaderUserUserImage?: string;
        LeaderUserInsertDate?: string;
        LeaderUserInsertUserId?: number;
        LeaderUserUpdateDate?: string;
        LeaderUserUpdateUserId?: number;
        LeaderUserIsActive?: number;
        LeaderUserGroupId?: number;
        SaleUserUsername?: string;
        SaleUserDisplayName?: string;
        SaleUserEmail?: string;
        SaleUserSource?: string;
        SaleUserPasswordHash?: string;
        SaleUserPasswordSalt?: string;
        SaleUserLastDirectoryUpdate?: string;
        SaleUserUserImage?: string;
        SaleUserInsertDate?: string;
        SaleUserInsertUserId?: number;
        SaleUserUpdateDate?: string;
        SaleUserUpdateUserId?: number;
        SaleUserIsActive?: number;
        SaleUserGroupId?: number;
    }

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Customer';
        export const lookupKey = 'Default.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Default.Customer');
        }
        export const deletePermission = 'Default:Customer:Delete';
        export const insertPermission = 'Default:Customer:Insert';
        export const readPermission = 'Default:Customer:View';
        export const updatePermission = 'Default:Customer:Modify';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            Name = "Name",
            Mobile = "Mobile",
            CarCode = "CarCode",
            Address = "Address",
            DateRegistry = "DateRegistry",
            StatusId = "StatusId",
            ImageRegistryPath = "ImageRegistryPath",
            SaleNote = "SaleNote",
            SaleDate = "SaleDate",
            LeaderUserId = "LeaderUserId",
            SaleUserId = "SaleUserId",
            ExpirationDate = "ExpirationDate",
            Price = "Price",
            IsLeaderSent = "IsLeaderSent",
            ModifiedDate = "ModifiedDate",
            SaleUpdateDate = "SaleUpdateDate",
            SeatNumber = "SeatNumber",
            TypeCar = "TypeCar",
            Discount = "Discount",
            ShipAddress = "ShipAddress",
            NetworkName = "NetworkName",
            DateOfRegistry = "DateOfRegistry",
            MonthOfRegistry = "MonthOfRegistry",
            DateExp = "DateExp",
            MonthExp = "MonthExp",
            NetworkNameName = "NetworkNameName",
            StatusName = "StatusName",
            LeaderUserUsername = "LeaderUserUsername",
            LeaderUserDisplayName = "LeaderUserDisplayName",
            LeaderUserEmail = "LeaderUserEmail",
            LeaderUserSource = "LeaderUserSource",
            LeaderUserPasswordHash = "LeaderUserPasswordHash",
            LeaderUserPasswordSalt = "LeaderUserPasswordSalt",
            LeaderUserLastDirectoryUpdate = "LeaderUserLastDirectoryUpdate",
            LeaderUserUserImage = "LeaderUserUserImage",
            LeaderUserInsertDate = "LeaderUserInsertDate",
            LeaderUserInsertUserId = "LeaderUserInsertUserId",
            LeaderUserUpdateDate = "LeaderUserUpdateDate",
            LeaderUserUpdateUserId = "LeaderUserUpdateUserId",
            LeaderUserIsActive = "LeaderUserIsActive",
            LeaderUserGroupId = "LeaderUserGroupId",
            SaleUserUsername = "SaleUserUsername",
            SaleUserDisplayName = "SaleUserDisplayName",
            SaleUserEmail = "SaleUserEmail",
            SaleUserSource = "SaleUserSource",
            SaleUserPasswordHash = "SaleUserPasswordHash",
            SaleUserPasswordSalt = "SaleUserPasswordSalt",
            SaleUserLastDirectoryUpdate = "SaleUserLastDirectoryUpdate",
            SaleUserUserImage = "SaleUserUserImage",
            SaleUserInsertDate = "SaleUserInsertDate",
            SaleUserInsertUserId = "SaleUserInsertUserId",
            SaleUserUpdateDate = "SaleUserUpdateDate",
            SaleUserUpdateUserId = "SaleUserUpdateUserId",
            SaleUserIsActive = "SaleUserIsActive",
            SaleUserGroupId = "SaleUserGroupId"
        }
    }
}

