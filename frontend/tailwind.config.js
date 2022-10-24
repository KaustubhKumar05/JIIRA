module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          default: "#F97316",
          light: "#FB923C",
          lighter: "#FCD34D",
        },
        background: {
          default: "#0F172A",
          light: "#1E293B",
        },
        bord: {
          default: "#374151",
        },
      },
    },
  },
  plugins: [],
};
