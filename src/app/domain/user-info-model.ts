interface User {
    // username: string;
    // requirePasswordChange: boolean;
    // userPermissions: any[];
    // userRoles: any[];
    id: string;
    name: string;
    password: string;
    posts: any[];
    userId: string;
}

export interface UserInfoModel {
    token: string;
    // tslint:disable-next-line:semicolon sessionId
    userAccount: User
}

export interface Login {
    username: string;
    password: string;
}

export interface TokenInfo {
    hasToken: boolean;
}

/*作为当前用户存储在storage中的key的type*/
export type UserKeyType = "currentUser";
