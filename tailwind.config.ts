import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#090909", paper: "#E8E2D5", gold: "#B59655", blood: "#6F1116" }, fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-sans)"] } } }, plugins: [] };
export default config;
