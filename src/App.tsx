import * as React from 'react';
import {PropsWithChildren} from 'react';
import {CssBaseline} from '@mui/material';
import AppTheme from './theme/AppTheme';

const xThemeComponents = {
    // Customizações do tema, se houver
};

const App = (
    {children}: PropsWithChildren, props: { disableCustomTheme?: boolean }) => {
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme/>
            <div
            >
                {children}
            </div>
        </AppTheme>
    );
};

export default App;
