import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        dancingScript: ['"Dancing Script", cursive'],
        caveat: ['"Caveat", cursive'],
        grapeNuts: ['"Grape Nuts", cursive'],
        mynerve: ['"Mynerve", cursive'],
        oxygen: ['"Oxygen", sans-serif'],
        palanquin: ['"Palanquin", sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
