import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/css/tabler-marketing.min.css'
import './tabler-bridge.css'
import Layout from './Layout.vue'
import HomePage from './components/home/HomePage.vue'
import ComingSoon from './components/ComingSoon.vue'
import AppScreenshot from './components/AppScreenshot.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('ComingSoon', ComingSoon)
    app.component('AppScreenshot', AppScreenshot)
  },
} satisfies Theme
