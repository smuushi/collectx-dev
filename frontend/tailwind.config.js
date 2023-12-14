/** @type {import('tailwindcss').Config} */




/**
 * Here we define the tailwind config file
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        primary : "#227C6C",
        secondary: "#1DBF73",
        tertiary: "#F1FDF7",
        accent: "#7286D7",
        text: "#404145",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-bg" : "#24262b",
        "white-100": "#f3f3f3",
        "blue-deep": "#00008B",
        'luxury-gold': '#9c8c5b',
        "blue-light": "#98c1d9",
        "blue-lighter": "#e0fbfc",
        "black-light": "#293241",  
        'green': '#1b5f5e',
        'yellow' : '#feb15f',

        // primary: "#000000",
        // secondary: "#F2F2F2",
        // tertiary: "#E5E5E5",
        // four: "#979797",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "black-bg" : "#24262b",
        // "white-100": "#f3f3f3",
        // "blue-deep": "#00008B",
        // 'luxury-gold': '#9c8c5b',
        // "blue-light": "#98c1d9",
        // "blue-lighter": "#e0fbfc",
        // "black-light": "#293241",  
        // 'green': '#1b5f5e',
        // 'yellow' : '#feb15f',
        // "accent": "#A90D0D",
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1920px',
        '4xl': '2560px',
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        product: "rgba(0,0,0,0.08) 0 4px 15px",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      gridTemplateColumns:{
        'layout': '60% 40%',
      },
      fontFamily:{
        'mainPageFont' : ['CourierNew', 'Courier', 'monospace']
      },
      rotate: {
        '30': '30deg',
      },
      scale: {
        '200': '2',
        '175': '1.75',
        '150': '1.5',
        '125': '1.25',
        '110': '1.1',
        '90': '0.9',
        '75': '0.75',
        '50': '0.5',
        '25': '0.25',
      },
      padding: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '45': '11.25rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "userbackground": "url('/src/constants/testData/userbackground.jpg')",
      },
      fontFamily : {
        'base-font' : ['Montserrat']
      }
    },
  },
  plugins: [],
}

