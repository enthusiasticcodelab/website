import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'Enthusiastic Code Lab',
  description: 'Coding out of passion',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.webp' }],
  ],
  themeConfig: {
    logo: '/logo.webp',
    outline: [2, 3],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Repositories', link: 'https://github.com/orgs/enthusiasticcodelab/repositories' },
    ],
    footer: {
      copyright: 'Copyright © 2023 Nándor Dudás',
      message: 'Released under the MIT License.',
    },
  },
}
