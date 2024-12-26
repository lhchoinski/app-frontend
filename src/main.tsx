import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Overlay Scrollbar
import 'overlayscrollbars/overlayscrollbars.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
import './i18n';

// Extensions
import '@Core/extensions/yup';

// Router
import { RouterProvider } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import router from "./Router";
import {persistor, store} from "./store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RouterProvider
                        router={router}
                        future={{
                            // eslint-disable-next-line camelcase
                            v7_startTransition: true,
                        }}
                    />
                </PersistGate>
            </Provider>
        </Suspense>
    </React.StrictMode>,
);
