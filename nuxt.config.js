export default {
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'ljomi  — Ingvi Jonasson',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Ingvi Jonasson' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I develop websites together with designers. Together we create quality solutions that works for people.',
      },

      // Open Graph
      {
        property: 'og:title',
        hid: 'og:title',
        name: 'og:title',
        content: 'ljomi  — Ingvi Jonasson',
      },
      {
        property: 'og:description',
        hid: 'og:description',
        name: 'og:description',
        content:
          'I develop websites together with designers. Together we create quality solutions that works for people.',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.ljomi.ch',
      },
      {
        property: 'og:image',
        hid: 'og:image',
        name: 'og:image',
        content: '/icon.png',
      },

      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@ingvoo',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'ljomi  — Ingvi Jonasson',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'I develop websites together with designers. Together we create quality solutions that works for people.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.ljomi.ch/icon.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Icongraphy for ljomi',
      },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap',
      },
    ],

    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      {
        defer: true,
        async: true,
        'data-domain': 'ljomi.ch',
        src: 'https://plausible.io/js/plausible.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css',
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
