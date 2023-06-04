import { defineConfig } from 'vitepress'

import { enConfig } from './en'
import { huConfig } from './hu'
import { sharedConfig } from './shared'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      ...enConfig,
    },
    hu: {
      label: 'Magyar',
      lang: 'hu-HU',
      link: '/hu/',
      ...huConfig,
    },
  },
})
