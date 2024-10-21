// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import db from '@astrojs/db'

import fulldev from 'fulldev-ui/integration'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    tailwind(),
    db(),
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
})
