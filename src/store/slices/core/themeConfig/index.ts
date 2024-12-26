import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';
import coreConfig from "../../../../coreConfig";

const initialState = {
    theme: coreConfig.theme.theme,
    menu: coreConfig.theme.menu,
    layout: coreConfig.theme.layout,
    rtlClass: coreConfig.theme.rtlClass,
    animation: coreConfig.theme.animation,
    navbar: coreConfig.theme.navbar,
    locale: coreConfig.locale,
    isDarkMode: false,
    sidebar: false,
    semiDark: coreConfig.theme.semiDark,
    languageList: [{ code: 'pt-BR', name: 'Português' }],
    isServiceAvailable: true,
    systemName: coreConfig.systemName,
};

const themeConfigSlice = createSlice({
    name: 'themeConfig',
    initialState: initialState,
    reducers: {
        toggleTheme(state, { payload }) {
            payload = payload || state.theme; // light | dark | system
            state.theme = payload;
            if (payload === 'light') {
                state.isDarkMode = false;
            } else if (payload === 'dark') {
                state.isDarkMode = true;
            } else if (payload === 'system') {
                state.isDarkMode =
                    window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
            }

            if (state.isDarkMode) {
                document.querySelector('body')?.classList.add('dark');
            } else {
                document.querySelector('body')?.classList.remove('dark');
            }
        },
        toggleMenu(state, { payload }) {
            payload = payload || state.menu; // vertical, collapsible-vertical, horizontal
            state.sidebar = false; // reset sidebar state
            state.menu = payload;
        },
        toggleLayout(state, { payload }) {
            payload = payload || state.layout; // full, boxed-layout
            state.layout = payload;
        },
        toggleRTL(state, { payload }) {
            payload = payload || state.rtlClass; // rtl, ltr
            state.rtlClass = payload;
            document
                .querySelector('html')
                ?.setAttribute('dir', state.rtlClass || 'ltr');
        },
        toggleAnimation(state, { payload }) {
            payload = payload || state.animation; // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
            payload = payload?.trim();
            state.animation = payload;
        },
        toggleNavbar(state, { payload }) {
            payload = payload || state.navbar; // navbar-sticky, navbar-floating, navbar-static
            state.navbar = payload;
        },
        toggleSemiDark(state, { payload }) {
            payload = payload === true || payload === 'true';
            state.semiDark = payload;
        },
        toggleLocale(state, { payload }) {
            payload = payload || state.locale;
            void i18next.changeLanguage(payload);
            state.locale = payload;
        },
        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        },
        setPageTitle(state, { payload }) {
            document.title = `${payload} ${coreConfig.titleSuffix}`;
        },
        setServiceAvailability(state, { payload }) {
            state.isServiceAvailable = payload;
        },
    },
});

export const {
    toggleTheme,
    toggleMenu,
    toggleLayout,
    toggleRTL,
    toggleAnimation,
    toggleNavbar,
    toggleSemiDark,
    toggleLocale,
    toggleSidebar,
    setPageTitle,
    setServiceAvailability,
} = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
