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
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%,  56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        slateBlue: 'hsl(252, 100%, 67%)',
        royalBlue: 'hsl(241, 81%, 54%)',
        violetBlue: 'hsla(256, 72%, 46%, 1)',
        persianBlue: 'hsla(241, 72%, 46%, 0)',
        paleBlue: 'hsl(221, 100%, 89%)',
        lavender: 'hsl(241, 100%, 89%)',
        grayBlue: 'hsl(224, 30%, 27%)',
      },
      boxShadow: {
        inverted: '0 -5px 15px 1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
