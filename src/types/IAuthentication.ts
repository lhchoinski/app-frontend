import { IAuthenticatedUser } from './IUser';

export interface IRecoverRequest {
    email: string;
}

export interface ICheckCodeRequest {
    email: string;
    code: string;
}

export interface IChangePasswordRequest {
    email: string;
    code: string;
    password: string;
}

export interface IJwtResponse {
    accessToken: string;
    refreshToken: string;
    user: IAuthenticatedUser;
}
