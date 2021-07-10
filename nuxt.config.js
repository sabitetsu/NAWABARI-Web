export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#fabe00' },
      { hid: 'description', name: 'description', content: '' },
      // OGP
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: '' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:image', property: 'og:image', content: '' },
      // Twitter OGP
      { hid: 'twitter:site', name: 'twitter:site', content: '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: '//fonts.gstatic.com/' },
      { rel: 'preconnect', href: '//images.ctfassets.net/' },
      { rel: 'preconnect', href: '//cdn.contentful.com/' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ress/dist/ress.min.css',
  ],

  styleResources: {
    scss: [
      '~assets/vars/*.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-fonts', { families: { 'Noto+Sans+JP': [100, 200, 300, 400, 500, 600, 700, 800, 900], 'Open+Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900], 'Montserrat': [100,200,300,400,500,600,700,800,900] }, display: 'block', download: true, override: true, inject: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
