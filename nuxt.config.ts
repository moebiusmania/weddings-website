
const isProd = (): boolean => process.env.NODE_ENV === 'production'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: isProd() ? "/weddings-website/" : "/",
    cdnURL: isProd() ? "https://moebiusmania.github.io/weddings-website/" : "",
  }
})
