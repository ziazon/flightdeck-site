import { defineConfig } from 'vitepress'

const description = 'A macOS control room for a team of AI coding agents.'

export default defineConfig({
  title: 'Flightdeck',
  description,
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { property: 'og:title', content: 'Flightdeck' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://flightdeck.saidi.pro/logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Docs', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'CLI', link: '/reference/cli', activeMatch: '/reference/' },
      { text: "What's coming", link: '/whats-coming' },
      { text: 'Download', link: '/download' },
      { text: 'Changelog', link: '/changelog' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Start here',
          items: [
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'How Flightdeck fits together', link: '/guide/overview' },
          ],
        },
        {
          text: 'Concepts',
          items: [
            { text: 'The workspace and notes', link: '/guide/workspace' },
            { text: 'Work buckets', link: '/guide/work-buckets' },
            { text: 'Jobs and runners', link: '/guide/jobs' },
            { text: 'Needs You', link: '/guide/needs-you' },
            { text: 'Monitors', link: '/guide/monitors' },
            { text: 'The Inbox', link: '/guide/inbox' },
          ],
        },
        {
          text: 'How-to guides',
          items: [
            { text: 'Run an agent until its work is done', link: '/guide/run-until-done' },
            { text: 'Run a job on a schedule', link: '/guide/run-on-a-schedule' },
            { text: 'Connect Jira, Slack and Trello', link: '/guide/connect-jira-slack-trello' },
          ],
        },
        {
          text: 'Your phone',
          items: [{ text: 'The iPhone companion', link: '/guide/companion' }],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [{ text: 'Command line', link: '/reference/cli' }],
        },
      ],
    },
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/ziazon/flightdeck-site' }],
    editLink: {
      pattern: 'https://github.com/ziazon/flightdeck-site/edit/main/docs/:path',
      text: 'Suggest a change to this page',
    },
    footer: {
      message: '<a href="/privacy">Privacy</a> · <a href="/support">Support</a>',
      copyright: 'Built by <a href="https://zia.saidi.pro">Zia Saidi</a>',
    },
  },
})
