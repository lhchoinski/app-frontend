import {createBrowserRouter} from 'react-router-dom';
import {AppRoutes} from "./Routes";
import BlankLayout from "../components/Layouts/BlankLayout";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ErrorBoundary from "../components/Errors/ErrorBoundary";

const finalRoutes = [...AppRoutes].map(route => {
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
