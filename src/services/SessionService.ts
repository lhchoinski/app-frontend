import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie/cjs/types';
import { IAuthenticatedUser } from '../types/IUser';
import { IMenuResponse } from '../types/IMenu';

const cookies = new Cookies();

const getCookieConf = (): CookieSetOptions => {
    return {
        path: '/',
        secure: true,
        sameSite: 'strict',
    };
};

export const getAccessToken = () => {
    return cookies.get('accessToken');
};

export const getRefreshToken = () => {
    return cookies.get('refreshToken');
};

export const setAccessToken = (token: string) => {
    cookies.set('accessToken', token, getCookieConf());
};

export const setRefreshToken = (token: string) => {
    cookies.set('refreshToken', token, getCookieConf());
};

export const removeTokens = () => {
    cookies.remove('accessToken', { path: '/' });
    cookies.remove('refreshToken', { path: '/' });
    localStorage.clear();
};

export const setMainMenu = (data: IMenuResponse[]) => {
    localStorage.setItem('mainMenu', JSON.stringify(data));
};

// export const getMainMenu = (): IMenuResponse[] => {
//     const menuSelector = store.getState().menu;
//     return menuSelector.menuItems;
// };

export const setUserData = (data: IAuthenticatedUser) => {
    localStorage.setItem('userData', JSON.stringify(data));
};


