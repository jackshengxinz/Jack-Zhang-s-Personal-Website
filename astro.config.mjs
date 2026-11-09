import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jackshengxinz.github.io',
  base: '/Jack-Zhang-s-Personal-Website/',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    base: '/Jack-Zhang-s-Personal-Website/',
  },
});