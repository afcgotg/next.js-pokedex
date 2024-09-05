import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'main-title': 'min(4rem, 10vw)',
        'pokemon-name': 'min(2.5rem, 10vw)'
      },
      colors: {
        'red-pokedex': 'var(--pokedex-color)',
        'red-background' : 'var(--background-color)',
      },
    }
  },
  plugins: [],
};
export default config;
