/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'background_image' :  "url('/assets/background_image.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

