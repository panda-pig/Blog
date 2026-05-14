/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.stone.800'),
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary.700'),
                textDecoration: 'underline',
              },
            },
            h1: { color: theme('colors.stone.900') },
            h2: { color: theme('colors.stone.900') },
            h3: { color: theme('colors.stone.900') },
            h4: { color: theme('colors.stone.900') },
            code: { color: theme('colors.stone.800') },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
        dark: {
          css: {
            color: theme('colors.stone.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            h1: { color: theme('colors.stone.100') },
            h2: { color: theme('colors.stone.100') },
            h3: { color: theme('colors.stone.100') },
            h4: { color: theme('colors.stone.100') },
            code: { color: theme('colors.stone.300') },
            blockquote: { color: theme('colors.stone.400') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
