import {ICoreConfig} from "./types/ICoreConfig";

const coreConfig: ICoreConfig = {
    locale: 'pt-BR',

    timeZone: 'America/Sao_Paulo',

    footerText: `
    <div class="flex">
      © ${new Date().getFullYear()}
      - Developed by
      <a href="https://evoluitec.com/" target="_blank" rel="noopener noreferrer" class="flex items-center hover:underline">
        <img class="ml-1 mr-1" src="/assets/images/icons/icon-72x72.png" style="width: 20px;" alt="EvoluiTec" />
        EvoluiTec
      </a>
    </div>
`,

    titleSuffix: ' | EvoluiTec',

    systemName: 'EvoluiTec',

    menuLogo: '/assets/images/evoluitec_logo.png',

    homeLogo: '/assets/images/evoluitec.png',

    authenticationProvider: ['local'],

    switchCompany: true,

    disableSocialLogin: true,

    disableRecoverPassword: false,

    loginImage: '/assets/images/evoluitec.png',

    loginImageClassName: undefined,

    loginFullTitle: undefined,

    loginBackgroundImage: ['/assets/images/evoluitec_background.jpg'],

    theme: {
        // light, dark, system
        theme: 'light',

        // vertical, collapsible-vertical, horizontal
        menu: 'vertical',

        // full, boxed-layout
        layout: 'full',

        // rtl, ltr
        rtlClass: 'ltr',

        // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight,
        // animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
        animation: '',

        // navbar-sticky, navbar-floating, navbar-static
        navbar: 'navbar-sticky',

        semiDark: false,
    },
};

export default { ...coreConfig};
