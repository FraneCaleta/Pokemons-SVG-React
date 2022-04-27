/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // not working as expected :(
      colors: {
        fire: "#f72585",
        grass: "#DEFDE0",
        electric: "#ffb703",
        water: "#4cc9f0",
        ground: "#cb997e",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#bdb2ff",
        bug: "#f8d5a3",
        dragon: "#ae2012",
        psychic: "#f1c0e8",
        flying: "#94d2bd",
        fighting: "#84a59d",
        normal: "#f5cac3",
      },
    },
  },
  plugins: [require("daisyui")],
};
