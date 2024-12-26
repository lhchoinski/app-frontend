import React from 'react';
import { IPrivateRouteProps } from './interfaces';
import Error401 from "../../../pages/Errors/Error401";

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children }) => {

    if(!!localStorage.getItem('authToken')) {
        return <React.Fragment>{children}</React.Fragment>;
    }

    return <Error401 />;
};


export default PrivateRoute;
