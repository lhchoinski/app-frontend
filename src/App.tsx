import * as React from 'react';
import {alpha} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import AppTheme from './theme/AppTheme';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from './theme/customizations';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

const App = (props: { disableCustomTheme?: boolean }) => {
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme/>
            <Box sx={{display: 'flex'}}>
                <SideMenu/>
                <AppNavbar/>
                {/* Main content */}
                <Box
                    component="main"
                    sx={(theme) => ({
                        flexGrow: 1,
                        backgroundColor: theme
                            ? `rgba(${theme.palette.background.default} / 1)`
                            : alpha(theme, 1),
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 5,
                            mt: {xs: 8, md: 0},
                        }}
                    >
                        <Header/>
                        <Home/>
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}

export default App;
