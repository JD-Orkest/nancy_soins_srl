<template>
  <header class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-[12px] z-50 shadow-sm transition-all duration-300">
    <div class="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
      
      <a href="#accueil" class="text-2xl font-bold text-primary z-50">
        Nancy Soins SRL
      </a>

      <nav class="hidden md:flex gap-8 font-semibold text-gray-600 text-sm items-center">
        <a href="#accueil" class="hover:text-primary transition-colors">Accueil</a>
        <a href="#a-propos" class="hover:text-primary transition-colors">À Propos</a>
        <a href="#services" class="hover:text-primary transition-colors">Services</a>
        <a href="#infos-pratiques" class="hover:text-primary transition-colors">Infos Pratiques</a>
        <a href="#contact" class="hover:text-primary transition-colors">Contact</a>
        
        <a href="tel:+32495438490" class="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-container transition-colors flex items-center gap-2 text-sm ml-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          0495 43 84 90
        </a>
      </nav>

      <button 
        @click="toggleMenu" 
        class="md:hidden text-primary focus:outline-none z-50 p-2"
        aria-label="Menu"
      >
        <svg v-if="!isMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

    </div>

    <div 
      v-show="isMenuOpen" 
      class="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col font-semibold text-gray-600 text-base"
    >
      <a href="#accueil" @click="closeMenu" class="px-6 py-4 border-b border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors">Accueil</a>
      <a href="#a-propos" @click="closeMenu" class="px-6 py-4 border-b border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors">À Propos</a>
      <a href="#services" @click="closeMenu" class="px-6 py-4 border-b border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors">Services</a>
      <a href="#infos-pratiques" @click="closeMenu" class="px-6 py-4 border-b border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors">Infos Pratiques</a>
      <a href="#contact" @click="closeMenu" class="px-6 py-4 border-b border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors">Contact</a>
      
      <div class="p-6">
        <a href="tel:+32495438490" class="w-full bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          Appeler : 0495 43 84 90
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// État réactif pour savoir si le menu mobile est ouvert ou fermé
const isMenuOpen = ref(false)

// Fonction pour inverser l'état (ouvrir/fermer)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Fonction pour forcer la fermeture (utile quand on clique sur un lien)
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>