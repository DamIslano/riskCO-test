// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    strict: true
  },
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      apiUrl: import.meta.env.NUXT_PUBLIC_API_URL
    }
  }
})
