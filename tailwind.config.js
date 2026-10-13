export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#071C2F', 900: '#05141F', 800: '#0B2740' },
        petrol: { DEFAULT: '#123B57', light: '#1C4E70' },
        gold: { DEFAULT: '#D9A441', light: '#E6B95E', deep: '#8A6418' },
        ink: '#222B35',
        mist: '#F4F6F8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
};
