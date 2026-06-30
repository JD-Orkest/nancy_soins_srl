<template>
  <header class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-[12px] z-50 shadow-sm transition-all duration-300">
    <div class="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
      
      <a href="#accueil" class="flex items-center gap-3 z-50 group">
        <img 
          src="/logo.svg" 
          alt="Logo Nancy Soins SRL" 
          class="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105" 
        />
        <span class="text-xl md:text-2xl font-bold text-primary hidden sm:block">
          Nancy Soins SRL
        </span>
      </a>

      <nav class="hidden md:flex gap-8 font-semibold text-gray-600 text-sm">
        <a href="#accueil" class="hover:text-primary transition-colors">Accueil</a>
        <a href="#a-propos" class="hover:text-primary transition-colors">À Propos</a>
        <a href="#services" class="hover:text-primary transition-colors">Services</a>
        <a href="#infos-pratiques" class="hover:text-primary transition-colors">Infos Pratiques</a>
        <a href="#contact" class="hover:text-primary transition-colors">Contact</a>
      </nav>

      <a href="tel:+32495438490" class="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-container transition-colors flex items-center gap-2 text-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        Appeler : 0495 43 84 90
      </a>
      
    </div>
  </header>
</template>