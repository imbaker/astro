// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import fulldev from 'fulldev-ui/integration';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  integrations: [
    tailwind(),
    fulldev({
      colors: {
        theme: 'dark',
        dark: {
          background: '#111110',
          base: '#6F6D66',
          brand: '#F50',
        },
      },
    }),
  ],

  adapter: netlify(),
});