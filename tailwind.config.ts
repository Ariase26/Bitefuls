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
        gunmetal: "var(--gunmetal)",
        charcoal: "var(--charcoal)",
        oldlace: "var(--old-lace)",
        barnred: "var(--barn-red)",
        rufous: "var(--rufous)",
        richblack: "var(--rich-black)",
        charcoaltwo: "var(--charcoal-2)",
        rawumber: "var(--raw-umber)",
        satinsheengold: "var(--satin-sheen-gold)",
        licorice: "var(--licorice)",
        eerieblack: "var(--eerie-black)",
      },
      fontFamily: {
        playfair: "var(--font-playfair)",
        lora: "var(--font-lora)",
      },
    },
  },
  plugins: [],
} satisfies Config;
