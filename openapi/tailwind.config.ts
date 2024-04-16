import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // green
      'green-500':'#3F979B',
      'green-200' : '#B1EFB7', 
      'green-100' : '#B9F8BF',

      //blue
      'blue-500' : '#1A73E8',
      'blue-400' : '#3CA3DD',
      'blue-300' : '#98D0EF',
      'blue-100' : '#C2FCFF',
      'blue-50'  : '#F3FBFF',

      //yellow
      'yellow-200' : '#F6F6CD',
      'yellow-100' : '#FCFFDB',

      //black  
      'black' : '#000000',

      //gray
      'gray-400' : '#222222',
      'gray-300' : '#424242',
      'gray-200' : '#7A7A7A',
      'gray-150' : '#DADADA' ,
      'gray-100' : '#D5D8DE',
      'gray-50' : '#DDDDDD',
      'gray-25' : '#E7E7E7',
      'gray-10' : '#F6F8FB',

      //white
      'white' :  '#ffffff',

      //red
      'red' : '#FF0000',

      //orange
      'orange' :  '#FFA500',

      //purple
      'purple' : '#A020F0'

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Roboto:['Roboto', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
