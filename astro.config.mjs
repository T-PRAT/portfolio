import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  output: 'static',
  site: 'https://tprat.dev',
  devToolbar: { enabled: false },
  integrations: [
    vue(),
    tailwind({ applyBaseStyles: false }),
  ],
})
