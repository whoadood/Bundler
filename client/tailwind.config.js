/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        creamcycle: '#ff4d76',
        darkSlate: 'hsl(234, 29%, 20%)',
        charcoal: 'hsl(235, 18%, 26%)',
        femGrey: 'hsl(231, 7%, 60%)',
        femWhite: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
