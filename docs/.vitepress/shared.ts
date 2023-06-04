import { defineConfig } from 'vitepress'

import { homepage as link } from '../../package.json'

// https://vitepress.dev/reference/site-config
export const sharedConfig = defineConfig({
  title: 'Enthusiastic Code Lab',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.webp' }],
  ],
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.webp',
    outline: [2, 3],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Repositories', link: 'https://github.com/orgs/enthusiasticcodelab/repositories' },
    ],
    sidebar: [
      // TODO: fill out with items
    ],
    socialLinks: [
      { icon: 'github', link },
      { icon: 'youtube', link: 'https://www.youtube.com/@enthusiasticcodelab' },
    ],
  },
})
