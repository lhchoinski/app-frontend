import React from 'react';
import {Routes} from "./Routes";
import BlankLayout from "../components/Layouts/BlankLayout";
import ErrorBoundary from "../components/Errors/ErrorBoundary";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import {createBrowserRouter} from "react-router-dom";

const finalRoutes = [...Routes].map(route => {
    return {
        ...route,
        element:
            route.layout === 'blank' ? (
                <BlankLayout>{route.element}</BlankLayout>
            ) : (
                <DefaultLayout>{route.element}</DefaultLayout>
            ),
        errorElement: <ErrorBoundary/>,
    };
});

const router = createBrowserRouter(finalRoutes, {
    future: {
        // eslint-disable-next-line camelcase
        v7_normalizeFormMethod: true,
        // eslint-disable-next-line camelcase
        v7_skipActionErrorRevalidation: true,
        // eslint-disable-next-line camelcase
        v7_partialHydration: true,
        // eslint-disable-next-line camelcase
        v7_fetcherPersist: true,
        // eslint-disable-next-line camelcase
        v7_relativeSplatPath: true,
    },
});

export default router;

// const AppRoutes = () => {
//     return (
//         <Routes>
//             {/* Rotas Públicas */}
//             <Route
//                 path="/login"
//                 element={<LoginPage/>}
//             />
//
//             {/* Rotas Privadas */}
//             <Route
//                 path="/"
//                 element={<PrivateRoute><Home/></PrivateRoute>}
//             />
//         </Routes>
//     );
// };

// export default AppRoutes;
