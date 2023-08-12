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
  theme: {},
  plugins: [],
}

// Exporting Configs
export default config;
