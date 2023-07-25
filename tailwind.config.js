/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#111b21",
          light: "#005c4b",
        },
        contrast: {
          primary: "#d1d7db",
          secondary: "#8696a0",
          tertiary: "#d9dee0",
          strong: "#e9edef",
        },
      },
      backgroundImage: {
        "gradient-one": "linear-gradient(-135deg, #005c4b, black)",
        "gradient-two": "linear-gradient(135deg, #0b141a, #005c4b )",
        "body-gradient": "radial-gradient( #005c4b 10%, black);",
        "gradient-x": "radial-gradient(#dcfff8 5%, #05caa5, #005c4b)",
      },
      boxShadow: {
        circles: "0 0 30px 30px;",
        circles: `var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(0 0 30px 30px var(--tw-shadow-color));`,
      },
      animation: {
        rise: "rise linear infinite",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(-100vh)" },
        },
      },
      fontFamily: {
        poppins: " 'Poppins', sans-serif",
        nunito: " 'Nunito', sans-serif",
      },
    },
  },
  plugins: [],
}
