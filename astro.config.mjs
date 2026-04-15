import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  output: 'static',
  site: 'https://tprat.fr',
  integrations: [
    vue(),
    tailwind({ applyBaseStyles: false }),
  ],
})
