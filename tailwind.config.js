module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#FFF',
        primary: {
          300: '#CCF5F5',
          DEFAULT: '#76D0D3',
          700: '#63B9BD',
        },
        secondary: {
          300: '#2E8C94',
          DEFAULT: '#1F737D',
          700: '#00424F',
        },
        complementary: {
          300: '#FFEFCA',
          DEFAULT: '#F6CD61',
          800: '#C49F34',
        },
        highlight: {
          300: '#FFE5D9',
          DEFAULT: '#FE8A71',
          800: '#D3654F',
        },
        base: {
          100: '#FBFBFB',
          200: '#F2F2F2',
          400: '#D9D9D9',
          500: '#C1C1C1',
          700: '#808080',
          900: '#303030',
        },
        danger: {
          300: '#FED1D6',
          DEFAULT: '#CA1628',
          800: '#940614',
        },
        success: {
          300: '#CBFAD5',
          DEFAULT: '#3EBB59',
        },
        warning: {
          300: '#FFF3D3',
          DEFAULT: '#E6B535',
        },
      },
    },
  },
  plugins: [],
}
