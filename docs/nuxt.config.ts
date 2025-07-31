// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    moduleSideEffects: ['@aibetter/ui-components'],
  },

  modules: ['@nuxt/content', '@nuxt/fonts', 'nuxt-ssr-lit'],
  ssrLit: {
    litElementPrefix: 'u-',
  },
})
