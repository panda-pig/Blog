import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://your-blog.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
})
