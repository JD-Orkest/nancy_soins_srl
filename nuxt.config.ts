// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // <-- AJOUT : Pré-chargement pour corriger le warning Vite
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  // Configuration CSS et Tailwind
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Préparation pour le déploiement statique
  ssr: true,
  routeRules: {
    '/': { prerender: true }
  },
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr-BE'
      }
    }
  }
})