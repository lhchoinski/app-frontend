export interface ICoreConfig {
    locale: string;
    timeZone: string;
    footerText: string;
    titleSuffix: string;
    systemName: string;
    menuLogo: string;
    homeLogo: string;
    authenticationProvider: string[];
    switchCompany: boolean;
    disableSocialLogin: boolean;
    disableRecoverPassword: boolean;
    loginImage?: string;
    loginImageClassName?: string;
    loginFullTitle?: string;
    loginBackgroundImage: string[];
    theme: ICoreConfigTheme;
}

export interface ICoreConfigTheme {
    theme: string;
    menu: string;
    layout: string;
    rtlClass: string;
    animation: string;
    navbar: string;
    semiDark: false;
}
