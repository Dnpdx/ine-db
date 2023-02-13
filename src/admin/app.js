import AuthLogo from './extensions/logoine.png';
import MenuLogo from './extensions/logoine.png';
import favicon from './extensions/favicon.ico';

export default {

  config : {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    head: {
       favicon: favicon,
    },
    locales: [
      'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
    ],
    translations: {
      es: {
        "Auth.form.button.login.strapi": "Iniciar sesión",
        "Auth.form.welcome.subtitle": "Inicie sesión en su cuenta",
        "app.components.LeftMenu.navbrand.title": "Panel de control",
      },
      en: {
        "Auth.form.button.login.strapi": "Iniciar sesión",
        "Auth.form.welcome.subtitle": "Inicie sesión en su cuenta",
        "app.components.LeftMenu.navbrand.title": "Panel de control",
        "Auth.form.welcome.title": "Welcome!",
      }
    },
    theme: {
      dark: {
        colors: {
          primary100: '#D1007F',
          primary200: '#D1007F',
          primary500: '#ffffff',
          buttonPrimary500: '#D1007F',
          primary600: '#ffffff',
          buttonPrimary600: '#D1007F',
        }
      },
      light : {
        colors: {
          primary100: '#D1007F',
          primary200: '#D1007F',
          primary500: '#ffffff',
          buttonPrimary500: '#D1007F',
          primary600: '#ffffff',
          buttonPrimary600: '#D1007F',
        }
      }
      },
     tutorials: false,
     notifications: { release: false },
    },

    bootstrap() {},
  }


