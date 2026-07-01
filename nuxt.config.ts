// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Module d'optimisation d'images (WebP, AVIF, srcset responsive)
  modules: ['@nuxt/image'],

  image: {
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 375,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  // Optimisation de l'environnement de développement (DevTools)
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  // Configuration CSS globale
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Configuration de l'application et du déploiement
  ssr: true, 
  app: {
    // IMPORTANT GITHUB PAGES :
    // Puisque votre dépôt GitHub s'appelle 'nancy_soins_srl', nous devons définir la baseURL avec ce nom.
    // NOTE : Si plus tard vous achetez un vrai nom de domaine (ex: www.nancysoins.be), il vous suffira de remplacer ceci par '/'
    baseURL: '/nancy_soins_srl/',
    
    head: {
      htmlAttrs: {
        lang: 'fr-BE'
      },
      link: [
        // Préconnexion à Google Maps pour réduire la latence (point 5)
        { rel: 'preconnect', href: 'https://maps.googleapis.com' },
        { rel: 'preconnect', href: 'https://maps.gstatic.com', crossorigin: '' },
      ]
    }
  }
})