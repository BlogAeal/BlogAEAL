import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blogaeal.github.io/BlogAEAL',
  base: '/BlogAEAL',
  trailingSlash: 'never',
  build: { format: 'directory' }
});
