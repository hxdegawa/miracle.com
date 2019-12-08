export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'みらくる.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://xn--y8j1e4aj.com/ogp.png'
      },
      {
        name: 'twitter:description',
        content: 'みらくる.com - ゆめかわみらくるはっしんちゅう'
      },
      { name: 'twitter:title', content: 'みらくる.com' },
      {
        hid: 'description',
        name: 'description',
        content: 'みらくる.com - ゆめかわみらくるはっしんちゅう'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'みらくる.com'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://xn--y8j1e4aj.com/'
      },
      { hid: 'og:title', property: 'og:title', content: 'みらくる.com' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'みらくる.com - ゆめかわみらくるはっしんちゅう'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://xn--y8j1e4aj.com/ogp.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/particles.js',
    '~plugins/tilt.js',
    '~plugins/carousel.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
