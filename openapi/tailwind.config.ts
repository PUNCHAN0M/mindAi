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
      'green-200' : '#B9F8BF', 

      //blue
      'blue-500' : '#1A73E8',
      'blue-400' : '#3CA3DD',
      'blue-300' : '#98D0EF',
      'blue-100' : '#C2FCFF',

      //yellow
      'yellow-200' : '#F6F6CD',
      'yellow-100' : '#FCFFDB',

      //black  
      'black' : '#000000',

      //grey
      'grey-400' : '#222222',
      'grey-300' : '#424242',
      'grey-200' : '#7A7A7A',
      'grey-100' : '#D5D8DE',
      'grey-50' : '#DDDDDD',

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
