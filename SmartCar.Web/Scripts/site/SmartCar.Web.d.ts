/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace SmartCar.Administration {
}
declare namespace SmartCar.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SmartCar.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SmartCar.Administration {
}
declare namespace SmartCar.Administration {
}
declare namespace SmartCar.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SmartCar.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SmartCar.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SmartCar.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SmartCar.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SmartCar.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SmartCar.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SmartCar.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SmartCar.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SmartCar.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SmartCar.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SmartCar.Administration {
}
declare namespace SmartCar.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        GroupId: Serenity.LookupEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SmartCar.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SmartCar.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SmartCar.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SmartCar.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SmartCar.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SmartCar.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SmartCar.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SmartCar.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SmartCar.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        GroupId?: number;
        GroupName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            GroupId = "GroupId",
            GroupName = "GroupName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SmartCar.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SmartCar.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SmartCar.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SmartCar.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SmartCar.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SmartCar.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SmartCar.Default {
    interface CustomerAddDataForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class CustomerAddDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    namespace CustomerAddDataService {
        const baseUrl = "Default/CustomerAddData";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport = "Default/CustomerAddData/ExcelImport"
        }
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface CustomerBySaleIdForm {
        Name: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        CarCode: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        DateRegistry: Serenity.DateEditor;
        StatusId: Serenity.LookupEditor;
        ImageRegistryPath: Serenity.StringEditor;
        Price: Serenity.StringEditor;
        SaleNote: Serenity.TextAreaEditor;
        SaleDate: Serenity.DateEditor;
    }
    class CustomerBySaleIdForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    interface CustomerBySaleIdRow {
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
    namespace CustomerBySaleIdRow {
        const idProperty = "CustomerId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.CustomerBySaleId";
        const lookupKey = "Default.CustomerBySaleId";
        function getLookup(): Q.Lookup<CustomerBySaleIdRow>;
        const deletePermission = "Default:CustomerBySaleId:Modify";
        const insertPermission = "Default:CustomerBySaleId:Modify";
        const readPermission = "Default:CustomerBySaleId:Modify";
        const updatePermission = "Default:CustomerBySaleId:Modify";
        const enum Fields {
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
declare namespace SmartCar.Default {
    namespace CustomerBySaleIdService {
        const baseUrl = "Default/CustomerBySaleId";
        function Create(request: Serenity.SaveRequest<CustomerBySaleIdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerBySaleIdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerBySaleIdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerBySaleIdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/CustomerBySaleId/Create",
            Update = "Default/CustomerBySaleId/Update",
            Delete = "Default/CustomerBySaleId/Delete",
            Retrieve = "Default/CustomerBySaleId/Retrieve",
            List = "Default/CustomerBySaleId/List"
        }
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface CustomerForm {
        Name: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        CarCode: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        DateRegistry: Serenity.DateEditor;
        StatusId: Serenity.LookupEditor;
        ImageRegistryPath: Serenity.StringEditor;
        Price: Serenity.StringEditor;
        SaleNote: Serenity.TextAreaEditor;
        SaleDate: Serenity.DateEditor;
        LeaderUserId: Serenity.LookupEditor;
        SaleUserId: Serenity.LookupEditor;
        ExpirationDate: Serenity.DateEditor;
        IsLeaderSent: Serenity.BooleanEditor;
        ModifiedDate: Serenity.DateEditor;
        ShipAddress: Serenity.StringEditor;
        NetworkName: Serenity.LookupEditor;
        DateExp: Serenity.IntegerEditor;
        MonthExp: Serenity.IntegerEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    interface CustomerRow {
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
    namespace CustomerRow {
        const idProperty = "CustomerId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Customer";
        const lookupKey = "Default.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const deletePermission = "Default:Customer:Delete";
        const insertPermission = "Default:Customer:Insert";
        const readPermission = "Default:Customer:View";
        const updatePermission = "Default:Customer:Modify";
        const enum Fields {
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
declare namespace SmartCar.Default {
    interface CustomerSendDataForm {
        SaleUserId: Serenity.LookupEditor;
    }
    class CustomerSendDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    namespace CustomerService {
        const baseUrl = "Default/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Customer/Create",
            Update = "Default/Customer/Update",
            Delete = "Default/Customer/Delete",
            Retrieve = "Default/Customer/Retrieve",
            List = "Default/Customer/List"
        }
    }
}
declare namespace SmartCar.Default {
    namespace DefaultService {
        const baseUrl = "Default/Default";
        function SendBulkAction(request: SendBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            SendBulkAction = "Default/Default/SendBulkAction"
        }
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface GroupUsersForm {
        GroupId: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
    }
    class GroupUsersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    interface GroupUsersRow {
        GroupUserId?: number;
        GroupId?: number;
        UserId?: number;
        GroupGroupName?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
    }
    namespace GroupUsersRow {
        const idProperty = "GroupUserId";
        const localTextPrefix = "Default.GroupUsers";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            GroupUserId = "GroupUserId",
            GroupId = "GroupId",
            UserId = "UserId",
            GroupGroupName = "GroupGroupName",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive"
        }
    }
}
declare namespace SmartCar.Default {
    namespace GroupUsersService {
        const baseUrl = "Default/GroupUsers";
        function Create(request: Serenity.SaveRequest<GroupUsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GroupUsersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GroupUsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GroupUsersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/GroupUsers/Create",
            Update = "Default/GroupUsers/Update",
            Delete = "Default/GroupUsers/Delete",
            Retrieve = "Default/GroupUsers/Retrieve",
            List = "Default/GroupUsers/List"
        }
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface GroupsForm {
        GroupName: Serenity.StringEditor;
    }
    class GroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    interface GroupsRow {
        GroupId?: number;
        GroupName?: string;
    }
    namespace GroupsRow {
        const idProperty = "GroupId";
        const nameProperty = "GroupName";
        const localTextPrefix = "Default.Groups";
        const lookupKey = "Default.Groups";
        function getLookup(): Q.Lookup<GroupsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            GroupId = "GroupId",
            GroupName = "GroupName"
        }
    }
}
declare namespace SmartCar.Default {
    namespace GroupsService {
        const baseUrl = "Default/Groups";
        function Create(request: Serenity.SaveRequest<GroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Groups/Create",
            Update = "Default/Groups/Update",
            Delete = "Default/Groups/Delete",
            Retrieve = "Default/Groups/Retrieve",
            List = "Default/Groups/List"
        }
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface NetworkForm {
        Name: Serenity.StringEditor;
    }
    class NetworkForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    interface NetworkRow {
        Id?: number;
        Name?: string;
    }
    namespace NetworkRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Network";
        const lookupKey = "Default.Network";
        function getLookup(): Q.Lookup<NetworkRow>;
        const deletePermission = "Default:Status:Delete";
        const insertPermission = "Default:Status:Insert";
        const readPermission = "Default:Status:View";
        const updatePermission = "Default:Status:Modify";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace SmartCar.Default {
    namespace NetworkService {
        const baseUrl = "Default/Network";
        function Create(request: Serenity.SaveRequest<NetworkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NetworkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NetworkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NetworkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Network/Create",
            Update = "Default/Network/Update",
            Delete = "Default/Network/Delete",
            Retrieve = "Default/Network/Retrieve",
            List = "Default/Network/List"
        }
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface OrderStatusForm {
        Name: Serenity.StringEditor;
    }
    class OrderStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    interface OrderStatusRow {
        Id?: number;
        Name?: string;
    }
    namespace OrderStatusRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.OrderStatus";
        const lookupKey = "Default.OrderStatus";
        function getLookup(): Q.Lookup<OrderStatusRow>;
        const deletePermission = "Default:OrderStatus:Modify";
        const insertPermission = "Default:OrderStatus:Modify";
        const readPermission = "Default:OrderStatus:Modify";
        const updatePermission = "Default:OrderStatus:Modify";
        const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
declare namespace SmartCar.Default {
    namespace OrderStatusService {
        const baseUrl = "Default/OrderStatus";
        function Create(request: Serenity.SaveRequest<OrderStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/OrderStatus/Create",
            Update = "Default/OrderStatus/Update",
            Delete = "Default/OrderStatus/Delete",
            Retrieve = "Default/OrderStatus/Retrieve",
            List = "Default/OrderStatus/List"
        }
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface SendBulkActionRequest extends Serenity.ServiceRequest {
        CustomerIds?: number[];
        SaleId?: number;
    }
}
declare namespace SmartCar.Default {
}
declare namespace SmartCar.Default {
    interface StatusForm {
        StatusName: Serenity.StringEditor;
    }
    class StatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Default {
    interface StatusRow {
        StatusId?: number;
        StatusName?: string;
    }
    namespace StatusRow {
        const idProperty = "StatusId";
        const nameProperty = "StatusName";
        const localTextPrefix = "Default.Status";
        const lookupKey = "Default.Status";
        function getLookup(): Q.Lookup<StatusRow>;
        const deletePermission = "Default:Status:Delete";
        const insertPermission = "Default:Status:Insert";
        const readPermission = "Default:Status:View";
        const updatePermission = "Default:Status:Modify";
        const enum Fields {
            StatusId = "StatusId",
            StatusName = "StatusName"
        }
    }
}
declare namespace SmartCar.Default {
    namespace StatusService {
        const baseUrl = "Default/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Status/Create",
            Update = "Default/Status/Update",
            Delete = "Default/Status/Delete",
            Retrieve = "Default/Status/Retrieve",
            List = "Default/Status/List"
        }
    }
}
declare namespace SmartCar {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SmartCar {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SmartCar {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SmartCar {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SmartCar.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SmartCar.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SmartCar.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SmartCar.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SmartCar.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmartCar.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SmartCar {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SmartCar.Texts {
}
declare namespace SmartCar.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SmartCar.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SmartCar.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SmartCar.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SmartCar.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SmartCar.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SmartCar.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SmartCar.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SmartCar.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SmartCar.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SmartCar.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SmartCar.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SmartCar.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SmartCar.LanguageList {
    function getValue(): string[][];
}
declare namespace SmartCar.ScriptInitialization {
}
declare namespace SmartCar {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SmartCar.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SmartCar.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SmartCar.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SmartCar.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SmartCar.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace SmartCar.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SmartCar {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SmartCar.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SmartCar.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SmartCar.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SmartCar.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SmartCar.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SmartCar.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SmartCar.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SmartCar.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SmartCar.Default {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerForm;
    }
}
declare namespace SmartCar.Default {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<CustomerRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
        addDays(date: Date, days: number): Date;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace SmartCar.Default {
    class CustomerAddDataDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace SmartCar.Default {
    class CustomerAddDataGrid extends Default.CustomerGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SmartCar.Default {
    class CustomerBySaleIdDialog extends Serenity.EntityDialog<CustomerBySaleIdRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerBySaleIdForm;
    }
}
declare namespace SmartCar.Default {
    class CustomerBySaleIdGrid extends Serenity.EntityGrid<CustomerBySaleIdRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerBySaleIdDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<CustomerBySaleIdRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        private datetimeInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace SmartCar.Default {
    interface SendBulkActionRequest extends Serenity.ServiceRequest {
        CustomerIds?: number[];
        SaleId?: number;
    }
    namespace CustomerSendDataBulkService {
        const baseUrl = "Default/Default";
        function SendBulkAction(request: SendBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            SendBulkAction = "Default/Default/SendBulkAction"
        }
    }
}
declare namespace SmartCar.Default {
    class SendBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected convertArray(myArray: any): number[];
        protected executeForBatch(batch: any): void;
    }
}
declare namespace SmartCar.Default {
    class CustomerSendDataDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        CustomerIds: string[];
        constructor(CustomerIds: string[]);
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace SmartCar.Default {
    class CustomerSendDataGrid extends Default.CustomerGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected onViewSubmit(): boolean;
    }
}
declare namespace SmartCar.Default {
    class GroupUsersDialog extends Serenity.EntityDialog<GroupUsersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GroupUsersForm;
    }
}
declare namespace SmartCar.Default {
    class GroupUsersGrid extends Serenity.EntityGrid<GroupUsersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GroupUsersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Default {
    class GroupsDialog extends Serenity.EntityDialog<GroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GroupsForm;
    }
}
declare namespace SmartCar.Default {
    class GroupsGrid extends Serenity.EntityGrid<GroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GroupsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Default {
    class NetworkDialog extends Serenity.EntityDialog<NetworkRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: NetworkForm;
    }
}
declare namespace SmartCar.Default {
    class NetworkGrid extends Serenity.EntityGrid<NetworkRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NetworkDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Default {
    class OrderStatusDialog extends Serenity.EntityDialog<OrderStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OrderStatusForm;
    }
}
declare namespace SmartCar.Default {
    class OrderStatusGrid extends Serenity.EntityGrid<OrderStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Default {
    class StatusDialog extends Serenity.EntityDialog<StatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StatusForm;
    }
}
declare namespace SmartCar.Default {
    class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SmartCar.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
