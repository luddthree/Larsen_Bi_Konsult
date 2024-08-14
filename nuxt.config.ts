// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  modules: [
    '@nuxtjs/sitemap',
  ],

  sitemap: { // @ts-ignore
    hostname: 'https://larsenbikonsult.no',
    gzip: true,
    routes: [
      '/',  // Add your static routes here
      // You can add dynamic routes here if needed
    ],
  },
})
