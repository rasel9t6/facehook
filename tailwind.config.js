/** @type {import('tailwindcss').Config} */
export const content = ['./dist/**/*.{html,js}', './dist/assets/icons/*.svg'];
export const theme = {
  container: {
    center: true,
    padding: '1rem',
  },
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      lwsGreen: '#00D991',
      deepDark: '#17181C',
      mediumDark: '#1E1F24',
      lighterDark: '#27292F',
    },
  },
};
export const plugins = [require('@tailwindcss/typography')];
