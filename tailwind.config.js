/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'sm2': '660px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      'md2': '780px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'nav-bg': 'var(--color-nav-bg)',
        'nav-bg-hover': 'var(--color-nav-bg-hover)',
        'body-bg': 'var(--color-body-bg)',
        'gray1': 'var(--color-gray1)',
        'blue-title': 'var(--color-blue-title)',
        'footer-bg': 'var(--color-footer-bg)',
        'menu-border': 'var(--color-menu-border)',
        'grey2': 'var(--color-grey2)',
      },
      flex: {
        '50': '1 1 50%'
      }
    },
  },
  plugins: [],
}

