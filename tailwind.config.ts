import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: "#232b35",
        charcoal: "#253a4b",
        oldlace: "#f5eede",
        barnred: "#69200c",
        rufous: "#9e280c",
        richblack: "#192028",
        charcoaltwo: "#3a454d",
        rawumber: "#9c5831",
        satinsheengold: "#c6962b",
        licorice: "#151115",
        eerieblack: "#171b1f",
      },
      fontFamily: {
        playfair: "var(--font-playfair)",
        lora: "var(--font-lora)",
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateY(10px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      backgroundImage: {
        swirl: "url('/images/textures/swirl.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
