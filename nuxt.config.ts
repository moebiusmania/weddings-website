
const isProd = (): boolean => process.env.NODE_ENV === 'production'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  baseURL: isProd ? "/weddings-website/" : "/",
  buildAssetsDir: "."
})
