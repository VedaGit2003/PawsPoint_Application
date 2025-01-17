/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [],
   content: ["./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
   ],
    theme: {
      extend: {
        fontFamily:{
          'buggie':["Bungee Tint", 'sans-serif']
        },
        width:{
          1.5:'15%'
        }
      },
      
    },
    plugins: [],
    presets: [require("nativewind/preset")],
  }

