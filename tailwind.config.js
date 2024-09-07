/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,js}",
    "./pages/**/*.{jsx,js}",
    "./auth/**/*.{jsx,js}",
    "./ui/**/*.{jsx,js}",
    "./figthers/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saiyan': ['SaiyanSans', 'sans-serif'], // Agrega la fuente aquí
      },
    },
  },
  plugins: [],
}
