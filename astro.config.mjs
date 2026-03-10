// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: false
  },

  adapter: node({
    mode: 'standalone'
  }),

  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  },
});