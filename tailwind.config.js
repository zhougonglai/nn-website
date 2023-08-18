/** @type {import('tailwindcss').Config} */

const neutrals = {
  DEFAULT: '#060607',
  0: '#fff',
  100: '#F7F8F9',
  200: '#F2F3F5',
  300: '#EBEDEF',
  400: '#E3E5E8',
  500: '#E0E1E5',
  600: '#DCDEE1',
  700: '#D7D9DC',
  800: '#B6BAC0',
  900: '#5C5E65',
  1000: '#404248',
  1100: '#36373C',
  1200: '#313338',
  1300: '#2E3035',
  1400: '#2B2D31',
  1500: '#232428',
  1600: '#1E1F22',
  '0A': '#ffffff20',
  '100A': '#06060703',
  '200A': '#06060710',
  '300A': '#06060730',
}

const brand = {
  100: '#FFFAEF',
  200: '#FFF1D4',
  300: '#FFE0A9',
  400: '#FFCC7D',
  500: '#FFB552',
  600: '#FF9B27',
  700: '#EE8E34',
  800: '#AA5717',
  900: '#803B10',
  1000: '#55230A',
}

const assist = {
  100: '#FFFAEF',
  200: '#CDF4DC',
  300: '#9EE9BD',
  400: '#73DEA0',
  500: '#4BD387',
  600: '#27C871',
  700: '#1FA760',
  800: '#17854E',
  900: '#10643B',
  1000: '#0A4328',
}

const green = {
  100: '#F0F8F1',
  200: '#D7F2DC',
  300: '#B3E5BB',
  400: '#91D79E',
  500: '#72CA84',
  600: '#56BD6D',
  700: '#469E5B',
  800: '#377E49',
  900: '#285F37',
  1000: '#1A3F25',
}

const orange = {
  100: '#FFF9EC',
  200: '#FFEFD0',
  300: '#FFDCA0',
  400: '#FEC671',
  500: '#FEAD42',
  600: '#FE9113',
  700: '#D46E0E',
  800: '#A94F09',
  900: '#7F3506',
  1000: '#551E03',
}

const red = {
  100: '#FFEDEB',
  200: '#FFD2CC',
  300: '#FF9C8F',
  400: '#F87462',
  500: '#EF5C48',
  600: '#E34935',
  700: '#CA3521',
  800: '#AE2A19',
  900: '#601E16',
  1000: '#4F1C16',
}

const blue = {
  100: '#E9F2FF',
  200: '#CCE0FF',
  300: '#85B8FF',
  400: '#579DFF',
  500: '#388BFF',
  600: '#1D7AFC',
  700: '#0C66E4',
  800: '#0055CC',
  900: '#09326C',
  1000: '#092957',
}


module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutrals,
        brand,
        assist,
        green,
        orange,
        red,
        blue,
        primary: {
          DEFAULT: brand[600],
          hover: brand[500],
          active: brand[600],
          disabled: brand[300],
        },
        secondary: {
          DEFAULT: assist[600],
          hover: assist[500],
          active: assist[700],
          disabled: assist[300],
        },
        success: {
          DEFAULT: green[600],
          hover: green[500],
          active: green[600],
          disabled: green[300],
        },
        warning: {
          DEFAULT: orange[600],
          hover: orange[500],
          active: orange[600],
          disabled: orange[300],
        },
        danger: {
          DEFAULT: red[600],
          hover: red[500],
          active: red[600],
          disabled: red[300],
        },
        link: {
          DEFAULT: blue[600],
          hover: blue[700],
          active: blue[800],
        },

        gray1: '#F2F2F2',
        gray2: '#F3F3F3',
        gray3: '#E4E5E6',
        gray4: '#E5E5E5',
        gray5: '#D6D6D6',
        gray6: '#D8D8D8',
        gray7: '#B2B2B2',
        gray8: '#ACACAC',
        gray9: '#969696',
        gray10: '#808080',
        gray11: '#6E6E6E',
        gray12: '#5A5A5A',
        gray13: '#474747',
        gray14: '#333333',

        login: '#FF9B27',
        'login-hover': '#78CBD4',
        'login-active': '#52A5AE',
        'login-disabled': '#15C5CE',

        close: '#E41E26',
        'close-active': '#C21A20',

        'error-btn': '#FD6670',
        'error-text': '#FC6464',

        'warn-text': '#FF7F00',
        'warn-bg': '#FFD19D-#FF4E00',

        'app-white': '#F5F5F5',
        'app-white-h': '#E8E8E9',

        'app-primary': '#FF9B27',
        'app-primary-h': '#FFAA48',
        'app-primary-a': '#FD8800',
        'app-primary-d': '#D6D6D6',

        'app-yellow': '#FF9C00',
        'app-blue': '#4CCCF4',
        'app-green': '#65C898',
        'app-red': '#FC6464',
        'app-gray': '#E8E8E9',
        'app-tea': '#60C2CC',
        'app-purple': '#D56EFF',
        'app-gold': '#F3A24B',
      },
    },
  },
  plugins: [],
};
