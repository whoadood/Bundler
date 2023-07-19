/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // news letter
        tomato: 'hsl(4, 100%, 67%)',
        creamcycle: '#ff4d76',
        darkSlate: 'hsl(234, 29%, 20%)',
        charcoal: 'hsl(235, 18%, 26%)',
        femGrey: 'hsl(231, 7%, 60%)',
        femWhite: 'hsl(0, 0%, 100%)',
        // results summary
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
        // credit card
        gradientA: 'hsl(249, 99%, 64%)',
        gradientB: 'hsl(278, 99%, 30%)',
        femRed: 'hsl(0, 100%, 66%)',
        LGrayViolet: 'hsl(270, 3%, 87%',
        DGrayViolet: 'hsl(279, 6%, 55%)',
        darkViolet: 'hsl(278, 68%, 11%)',
        // product preview
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        grayishBlue: 'hsl(228, 12%, 48%)',
        // expenses chart
        softRed: 'hsl(10, 79%, 65%)',
        femCyan: 'hsl(186, 34%, 60%)',
        darkBrown: 'hsl(25, 47%, 15%)',
        cream2: 'hsl(27, 66%, 92%)',
        paleOrange: 'hsl(33, 100%, 98%)',
        // news homepage
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue2: 'hsl(236, 13%, 42%)',
        darkBlue2: 'hsl(240, 100%, 5%)',
        // notification page
        femRed: 'hsl(1, 90%, 64%)',
        femBlue: 'hsl(219, 85%, 26%)',
        lightGB: 'hsl(210, 60%, 98%)',
        lightGB2: 'hsl(211, 68%, 94%)',
        lightGB3: 'hsl(205, 33%, 90%)',
        gB: 'hsl(219, 14%, 63%)',
        dGB: 'hsl(219, 12%, 42%)',
        vDB: 'hsl(224, 21%, 14%)',
      },
      boxShadow: {
        inverted: '0 -5px 15px 1px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        roboto: '[Roboto](https://fonts.google.com/specimen/Roboto)',
        hanken: '[Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk)',
        space: '[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)',
        montserrat: '[Montserrat](https://fonts.google.com/specimen/Montserrat)',
        fraunces: '[Fraunces](https://fonts.google.com/specimen/Fraunces)',
        dmSans: '[DM Sans](https://fonts.google.com/specimen/DM+Sans)',
        inter: '[Inter](https://fonts.google.com/specimen/Inter)',
        jakarta: '[Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)',
      },
    },
  },
  plugins: [],
};
