/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  presets: [require("@lucky-parking/ui/design-system.preset.js")],
};