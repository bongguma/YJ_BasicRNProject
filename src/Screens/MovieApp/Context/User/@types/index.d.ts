interface IuserInfo {
    name: String;
    email: String;
}

interface IuserContext {
    isLoading: boolean;
    userInfo: IuserInfo | undefined;
    login: (email: string, password: string) => void;
    getUserInfo: () => void;
    logout: () => void;
}
