import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#17cf17",
                "primary-dark": "#12a812",
                "background-light": "#f6f8f6",
                "background-dark": "#112111",
                "text-main": "#111811",
                "text-muted": "#638863",
                "surface-dark": "#1a2c1a"
            },
            fontFamily: {
                sans: ['"Public Sans"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
