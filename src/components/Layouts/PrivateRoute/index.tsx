import React from 'react';
import { getMainMenu } from '@CoreServices/SessionService';
import { findCurrentMenuPath } from '@CoreHelpers/MenuHelper';
import Error401 from '@Core/pages/Errors/Error401';
import { IPrivateRouteProps } from './interfaces';

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
    const menu = getMainMenu();
    const currentMenuPath = findCurrentMenuPath(menu, location.pathname);

    if (currentMenuPath) {
        return children;
    }

    return <Error401 />;
};

export default PrivateRoute;
