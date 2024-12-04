import React from "react";
import SignIn from "../pages/Auth/SignIn";

const AppRoutes = [
    // Login
    {
        path: '/auth/login',
        element: <SignIn />,
        layout: 'blank',
    },
];

export { AppRoutes };