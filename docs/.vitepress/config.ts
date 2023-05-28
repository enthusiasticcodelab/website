import { defineConfig } from 'vitepress'

import { homepage as link } from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Enthusiastic Code Lab',
  description: 'Coding out of passion',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link },
    ],
  },
})
