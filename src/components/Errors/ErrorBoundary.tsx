import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Error404 from '@CorePages/Errors/Error404';
import Error500 from '@CorePages/Errors/Error500';
import React from 'react';

const ErrorBoundary: React.FC = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error && error.status == 404) {
            return <Error404 />;
        }
    }

    return <Error500 />;
};

export default ErrorBoundary;
