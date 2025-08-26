import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  devServer: {
    port: 9002,
  },
  watch: ['./../packages/vue/src/**/*.{ts,vue}'],

  modules: ['@nuxt/content', '@nuxt/fonts'],
})
