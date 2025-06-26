import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jackshengxinz.github.io/Jack-Zhang-s-Personal-Website/',
  base: '/Jack-Zhang-s-Personal-Website/',
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind()]
});