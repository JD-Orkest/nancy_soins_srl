// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

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
      }
    }
  }
})