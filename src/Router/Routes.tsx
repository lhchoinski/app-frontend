import React, {lazy} from "react";

const LoginPage = lazy(() => import('../pages/Auth/Login'));
const Home = lazy(() => import('../pages/Home'));

const Routes = [
    // Login
    {
        path: '/login',
        element: <LoginPage />,
        layout: 'blank',
    },

    // Home
    {
        path: '/',
        element: <Home />,
        layout: 'default',
    },
];

export { Routes };