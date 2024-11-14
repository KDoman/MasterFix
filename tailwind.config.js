/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "xl-midle": "0 0 15px rgba(0,0,5,0.15)",
      },
      colors: {
        "--blue-color": "#5FA5E7",
        "--darker-blue-color": "#3B8FDD",
        "--grey-color": "#3B3B3B",
        "--white-color": "#fcfffc",
        "--black-color": "#04060F",
        "--darker-white": "#E7E7E7",
        "--active-bg-filter": "#e5e7eb",
      },
    },
  },
  plugins: [],
};
