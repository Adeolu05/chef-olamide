/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: '#0A1410',
                brandGreen: '#085E2F',
                emeraldDeep: '#095f30',
                champagne: '#D4AF37',
                softGold: '#F1E5AC',
                ivory: '#FDFCF8',
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
