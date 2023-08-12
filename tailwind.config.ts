// Codes By Mahdi Tasha
// Importing Configs Of TailwindCSS
import type { Config } from 'tailwindcss'

// Defining Configs Of TailwindCSS
const config: Config = {
  content: [
    './app/*.{tsx,ts,js,jsx}',
    './app/**/*.{tsx,ts,js,jsx}',
    './app/**/**/*.{tsx,ts,js,jsx}',
    './chunks/*.{tsx,ts,js,jsx}',
    './components/*.{tsx,ts,js,jsx}',
  ],
  theme: {
    colors: {
      headerBg: 'rgba(167, 167, 167, 0.20)',
      grey: '#4B4B4B',
      green: '#14FF00',
      red: '#FF0000',
      black: '#000000',
      white: '#ffffff'
    },
    fontFamily: {
      primary: ['roboto', 'sans-serif']
    }
  },
  plugins: [],
}

// Exporting Configs
export default config;
