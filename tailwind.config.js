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
          bg: "#F7F2E9",
          surface: "#FFFFFF",
          text: "#1F1B16",
          "text-secondary": "#72685C",
          border: "#BFB4A6",
          accent: "#222222",
        },
        dark: {
          bg: "#000000",
          surface: "#0D0D0D",
          text: "#F5EFE6",
          "text-secondary": "#D6CEC2",
          border: "#3D3D3D",
          accent: "#F5EFE6",
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
