import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import OwnerProfile from './components/OwnerProfile.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-hero-info-after': () => h(OwnerProfile),
    }),
}
