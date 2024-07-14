/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "cyber-blue": "#00fff5",
        // "cyber-pink": "#ff00ff",
        // "cyber-yellow": "#ffff00",
        // "cyber-black": "#0a0a0a",
        // "cyber-gray": "#1a1a1a",
        "cyber-blue": "#4cc9f0",
        "cyber-pink": "#f72585",
        "cyber-yellow": "#ffd60a",
        "cyber-black": "#0a0a0a",
        "cyber-gray": "#1a1a1a",
      },
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        "neon-blue": "0 0 5px #00fff5, 0 0 20px #00fff5",
        "neon-pink": "0 0 5px #ff00ff, 0 0 20px #ff00ff",
      },
    },
  },
  plugins: [],
};
