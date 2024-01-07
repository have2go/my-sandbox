import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                bg: "url('../../public/bg.jpg')",
            },
            colors: {
                "main-text": "#e3e3e3",
            },
        },
        screens: {
            "2xl": { max: "1600px" },
            // => @media (max-width: 1536px) { ... }

            "1.5xl": { max: "1400px" },
            // => @media (max-width: 1400px) { ... }

            xl: { max: "1280px" },
            // => @media (max-width: 1280px) { ... }

            lg: { max: "1070px" },
            // => @media (max-width: 1024px) { ... }

            "lg-min": { min: "1071px" },

            md: { max: "800px" },
            // => @media (max-width: 768px) { ... }

            "1.5sm": { max: "600px" },
            // => @media (max-width: 480px) { ... }

            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }

            xsm: { max: "410px" },
            // => @media (max-width: 480px) { ... }

            xxsm: { max: "380px" },
            // => @media (max-width: 480px) { ... }
        },
    },
    plugins: [],
};
export default config;
