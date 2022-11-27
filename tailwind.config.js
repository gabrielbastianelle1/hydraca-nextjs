/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                colorButton: 'var(--color-button)',
                userBackground: 'var(--color-background)'
            }
        }
    },
    plugins: []
}
