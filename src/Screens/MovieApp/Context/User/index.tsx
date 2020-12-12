import React, {createContext, useState, useEffect, Children} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { DevSettings } from 'react-native';

const defaultContext: IuserContext = {
    isLoading: false,
    userInfo: undefined,
    login: (email: string, password: string) => {},
    getUserInfo:() => {},
    logout:() => {},
};

const UserContext = createContext(defaultContext);

interface Props{
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}:Props) => {
    const [userInfo, setUserInfo] = useState<IuserInfo | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = (email: string, password:string): void => {
        //Use Email and Password for login API
        // Get token and UserInfo via Login API

        AsyncStorage.setItem('token', 'save your token').then(() => {
            setUserInfo({
                name: 'dev-yakuza',
                email: 'dev.yakuza@gamil.com',
            });
            setIsLoading(true);
        });
    };


    const getUserInfo = (): void => {
        AsyncStorage.getItem('token').then(value => {
            if(value) {
                setUserInfo({
                    name: 'dev-yakuza',
                    email: 'dev.yakuza@gamil.com',
                });
            }
            setIsLoading(true);
        })
        .catch(() => {
            setUserInfo(undefined);
            setIsLoading(true);
        });
    };

    const logout = (): void => {
        AsyncStorage.removeItem('token');
        setUserInfo(undefined);
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return(
        <UserContext.Provider 
            value={{
                isLoading, userInfo, login, getUserInfo, logout
            }}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};
