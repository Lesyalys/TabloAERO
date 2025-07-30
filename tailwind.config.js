export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  keyframes: {
    "marquee-move-text": {
      from: {
        transform: "translateX(0)",
      },
      to: {
        transform: "translateX(-50%)",
      },
    },
  },
  animation: {
    "marquee-move": "marquee-move-text 5s linear infinite forwards",
  },
}
