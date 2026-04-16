/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "sans-serif"],
      },
      colors: {
        // Premium grayscale palette
        light: {
          bg: "#F8F8F8",
          surface: "#FFFFFF",
          text: "#222222",
          "text-secondary": "#7B7B7B",
          border: "#7B7B7B",
          accent: "#222222",
        },
        dark: {
          bg: "#222222",
          surface: "#222222",
          text: "#FFFFFF",
          "text-secondary": "#F8F8F8",
          border: "#7B7B7B",
          accent: "#FFFFFF",
        },
        particle: {
          blue: "#7B7B7B",
          red: "#7B7B7B",
          yellow: "#7B7B7B",
          green: "#7B7B7B",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        antigravity: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
