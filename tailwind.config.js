export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  keyframes: {
    "marquee-move-text": {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(-100% + 50px))' },
      },
    },
    "animate-on-update": {
      fade: {
        '0%': { opacity: 0 },
        '50%': { opacity: 1 },
        '110%': { opacity: 0 }
      }
    }
  },
  animation: {
    "marquee-move": "scroll 1s linear infinite",
    "fade-pulse": "fade 1.5s ease-in-out infinite"
  },
}
