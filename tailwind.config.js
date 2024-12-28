/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gs': "url(/src/Components/Images/bckgets.png)",
    },
        fontFamily: {
          body: ["Ibarra Real Nova", "serif"],
          secondary: ["Inter", "san-serif"]
        },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        moveUp: 'moveUp 1s ease-in-out',
        moveLeft: 'moveLeft 1s ease-in-out',
      },

  },
},
  plugins: [],
}

