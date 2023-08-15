/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
