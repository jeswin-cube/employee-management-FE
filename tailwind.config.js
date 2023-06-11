/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plex: ["IBM Plex Mono", "monospace"],
      },
      textColor: {
        white: "#FFFFFF",
        black100: "#001A1A",
        green100: "#008080",
      },
      boxShadow: {
        highlightCard: "0px 0px 16px rgba(0, 128, 128, 0.16)",
      },
      colors: {
        backgroundGreen: "#E6F2F2",
        footer: "#001A1A",
      },
    },
  },
  plugins: [],
};
