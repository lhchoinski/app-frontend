import { IMenuResponse } from './IMenu';
import {ICompany} from "./ICompany";

export interface IUserForm {
    id?: string;
    name: string;
    email: string;
    provider: string;
    profileId: number;
}

export interface IUserRequest {
    id?: string | null;
    name: string;
    email: string;
    profileId: number;
    provider: string;
}

export interface IUserResponse {
    id: string;
    active: boolean;
    email: string;
    // profile: IProfileResponse;
    username: string;
    name: string;
    provider: string;
}

export interface IAuthenticatedUser {
    id: string;
    name: string;
    username: string;
    email: string;
    theme: string;
    // profile: IProfileResponse;
    menus: IMenuResponse[];
    companies: ICompany[];
    currentCompany: ICompany;
}

export interface IUserCache {
    ref: string;
    valor: string;
}
