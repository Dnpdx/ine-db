const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    light: {
      colors: {
        primary100: '#D1007F',
        primary200: '#D1007F',
        primary500: '#ffffff',
        buttonPrimary500: '#D1007F',
        primary600: '#ffffff',
        buttonPrimary600: '#D1007F',

      }
    },
    dark: {
      colors: {

        primary100: '#D1007F',
        primary200: '#D1007F',
        primary500: '#ffffff',
        buttonPrimary500: '#D1007F',
        primary600: '#ffffff',
        buttonPrimary600: '#D1007F',

      }
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
