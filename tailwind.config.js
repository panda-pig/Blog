import typography from '@tailwindcss/typography';

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Noto Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['SF Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [typography],
};
