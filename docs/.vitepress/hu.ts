import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const huConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'Enthusiastic Code Lab',
  description: 'Kódolás szenvedélyből',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.webp' }],
  ],
  themeConfig: {
    logo: '/logo.webp',
    outline: [2, 3],
    nav: [
      { text: 'Kezdőlap', link: '/' },
      { text: 'Adattárak', link: 'https://github.com/orgs/enthusiasticcodelab/repositories' },
    ],
    footer: {
      copyright: 'Szerzői jog © 2023 Nándor Dudás',
      message: 'MIT licenc alatt jelent meg.',
    },
  },
}
