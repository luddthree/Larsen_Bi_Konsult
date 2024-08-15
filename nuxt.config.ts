export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      gtagId: "G-FKLG7BQCE3", // Ensure this is your correct Google Analytics ID
    }
  },
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

  sitemap: { //@ts-ignore
    hostname: 'https://larsenbikonsult.no',
    gzip: true,
    routes: [
      '/',  // Add your static routes here
    ],
  },

  plugins: [
    '~/plugins/googleAnalytics.js',  // Add the plugin here
  ],
});
