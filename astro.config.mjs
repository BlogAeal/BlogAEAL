import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blogaeal.local',
  trailingSlash: 'never',
  build: { format: 'directory' }
});
