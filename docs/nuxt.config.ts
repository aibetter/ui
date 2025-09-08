import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'AI Better UI',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          href: '/logo.svg',
        },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  devServer: {
    port: 9002,
  },

  alias: {
    '@vue-ui': path.resolve(__dirname, '../packages/vue/src/index.ts'),
  },
  watch: ['./../packages/vue/src/**/*.{ts,vue}'],

  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image'],
})
