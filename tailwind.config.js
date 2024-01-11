/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./@/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        tablet: { max: "640px" },
        // => @media (min-width: 640px) { ... }

        laptop: { max: "1024px" },
        // => @media (min-width: 1024px) { ... }

        desktop: { max: "1280px" },
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        stiglitz: "rgba(50,50,93,0.25) 0px 6px 12px -2px, rgba(0,0,0,0.3) 0px 3px 7px -3px",
      },
      colors: {
        primaryColor: "#D9D9D9",
        secondaryColor: "#8E8E8E",
        inputColor: "#282828",
        backgroundColor: "#030303",
        footerColor: "#0A0A0A",
        gray01: "#DCDCDC",

        // Interns Page
        tealColor: "#02FFE2",
        lightPinkColor: "#FDB7D0",
        darkBlueColor: "#6A78F2",
        magentaColor: "#C108FE",
        darkBlueBgColor: "#6A78F2",
        redBgColor: "#FF0000",
        greenBgColor: "#02FFE2",
        violetBgColor: "#C108FE",
        // Co Devs
        greenColor: "#07AC50",
        redColor: "#D40000",
        yellowColor: "#FFC107",
        blueColor: "#066EBD",
        skyBlueColor: "#61DAFB",
        orangeColor: "#E76F00",

        text1: "rgba(var(--text-color-1))",
        text2: "hsl(var(--text-color-2))",
        text3: "hsl(var(--text-color-3))",
        text4: "hsl(var(--text-color-4))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        figmamuted: {
          DEFAULT: "rgba(var(--muted-figma))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          client: "rgba(var(--card-clients))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
