/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

const config  = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      fontFamily:{
        display: 'Oswald, ui-serif',
      },

      colors: {
        "primario"  : "#dc2626",
        "secundario": "#ff0000",
        "background" : "#ffffff",
        "primario1" : "#ffffff",
        "primario2" : "#ffffff",
        "primario3" : "#ffffff",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config;