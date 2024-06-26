/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        'title-big': ['Darker Grotesque', 'sans-serif'],
        'body-1': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'black-1': "#01100F",
        'dGreen': "#052826",
        "lGreen": "#39E8B0",
        "white-1": "#FFFFFF",
        "white-2": '#aaaaaa',
        'white-48': 'rgba(255, 255, 255, 0.48)',
        'white-12': 'rgba(255, 255, 255, 0.12)',
        'dGreen-72': 'rgba(5, 40, 38, 0.72)',
      },
      backgroundImage: {
        'gradient-hover': 'linear-gradient(to right, #39e8b0, #30d7a1, #27c592, #1eb584, #13a476)',
        'gradient-1': 'linear-gradient(to right, #13a476, #1eb584, #27c592, #30d7a1, #39e8b0)',
        'gradient-back': 'radial-gradient(40.87% 69.47% at 85.87% 31.98%, rgba(3, 255, 104, 0.09) 0%, rgba(121, 255, 175, 0.00) 100%), radial-gradient(54.34% 45.76% at 15.8% 49.94%, rgba(69, 3, 255, 0.20) 0%, rgba(69, 3, 255, 0.00) 100%), #01100F',
      },
      backgroundClip: {
        text: 'text',
      },
      textColor: {
        transparent: 'transparent',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
    },
  },
  plugins: [],
}