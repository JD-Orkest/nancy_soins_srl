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
    // NOTE : Domaine personnalisé nancy-soins.be → baseURL = '/'
    // (anciennement '/nancy_soins_srl/' pour GitHub Pages sans domaine)
    baseURL: '/',
    
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