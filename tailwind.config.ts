/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    future: { hoverOnlyWhenSupported: true },
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                accent: '#7987FF',
            },
            backgroundImage: {
                'gradient-background': 'linear-gradient(to top, #191B1F, #26292E)',
            },
            boxShadow: {
                'container-neumorph':
                    '-0.5rem -0.625rem 2.5rem -0.3125rem rgba(150, 190, 231, 0.15), 0.5rem 0.625rem 2.5rem 0.3125rem rgba(10, 10, 10, 0.7);',
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
                anton: ['var(--font-anton)', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'bubble-bounce': {
                    '0%, 100%': {
                        transform: 'translateY(-1.5rem)',
                    },
                    '50%': {
                        transform: 'translateY(1.5rem)',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                bubble: 'bubble-bounce 8s ease-in-out infinite alternate',
                'bubble-mid': 'bubble-bounce 12s ease-in-out infinite alternate',
                'bubble-slow': 'bubble-bounce 22s linear infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('tailwindcss-fluid-type'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
