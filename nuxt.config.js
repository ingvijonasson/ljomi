export default {
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
    title: 'ljomi  — Ingvi Jonasson — Frontend developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Ingvi Jonasson' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I’m Ingvi. I develop websites together with designers. I create quality frontend code that works for people.',
      },

      // Open Graph
      {
        property: 'og:title',
        hid: 'og:title',
        name: 'og:title',
        content: 'ljomi  — Ingvi Jonasson — Frontend developer',
      },
      {
        property: 'og:description',
        hid: 'og:description',
        name: 'og:description',
        content:
          'I’m Ingvi. I develop websites together with designers. I create quality frontend code that works for people.',
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
        content: '/static/Icon.png',
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
  css: [],
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
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
