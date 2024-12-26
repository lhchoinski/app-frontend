import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import React from 'react';
import Error404 from "../../pages/Errors/Error404";
import Error500 from "../../pages/Errors/Error500";

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
