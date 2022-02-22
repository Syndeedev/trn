export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'trn',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"preconnect", href:"https://fonts.googleapis.com"},
      {href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap", rel:"stylesheet"}
   
    ],
    script:[
        {
          hid: 'tawk.to',
          src:
              'https://embed.tawk.to/61fe6366b9e4e21181bd994b/1fr4r8iac',
              
          defer: true
      }
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   './assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {

        config: {
          apiKey: "AIzaSyAFzUBpT8SxFgoYr7_nlPOfu9U-j728vcQ",
          authDomain: "trn-consulting.firebaseapp.com",
          projectId: "trn-consulting",
          storageBucket: "trn-consulting.appspot.com",
          messagingSenderId: "617723921744",
          appId: "1:617723921744:web:08032501c948554ea81855"
        },
        services: {
          // auth: true, 
          firestore: true,
          database: true,
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
