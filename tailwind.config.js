import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'dark-blue-gradient': 'linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E37D7, #0050b3, #00001e)',
      }),
      animation: {
        gradient: 'gradient 10s linear infinite',
      },
      eyframes: {
        gradient: {
          '0%': {
            backgroundPosition: "0% 50%",
          },
          '25%': {
            backgroundPosition: "25% 50%",
          },
          '50%': {
            backgroundPosition: "50% 50%",
          },
          '75%': {
            backgroundPosition: "75% 50%",
          },
          '100%': {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
