/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            flex: "1 0 auto",
            colors: {
                "app-grey": "D9D9D9",
            },
        },
    },
    plugins: [],
};
