<template>
  <section id="accueil" class="relative pt-32 pb-20 min-h-[90vh] flex items-center bg-surface overflow-hidden">
    
    <div class="absolute inset-0 z-0">
      <img 
        src="~/assets/images/hero.png" 
        alt="Infirmière à domicile Nancy Soins" 
        class="absolute inset-0 w-full h-full object-cover object-center" 
      />
      
      <div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
    </div>

    <div class="max-w-[1200px] mx-auto px-4 relative z-10 w-full">
      <div class="max-w-2xl">
        
        <div class="inline-flex items-center gap-2 bg-soft-teal text-tertiary px-4 py-2 rounded-full font-label text-sm mb-6 shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Régions desservies : Le Roeulx, Thieu, Gottignies, Houdeng, Strépy, Naast et alentours.
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-primary leading-[1.2] tracking-tight mb-6">
          Nancy Soins SRL
        </h1>
        <p class="text-xl md:text-2xl font-semibold text-on-surface mb-8 leading-snug">
          Votre santé, ma priorité : des soins infirmiers professionnels, humains et à votre écoute, directement chez vous.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <a href="#contact" class="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-container transition-colors shadow-sm">Prendre rendez-vous</a>
          <a href="#services" class="bg-soft-teal text-tertiary px-8 py-3 rounded-md font-semibold hover:bg-[#b8cac9] transition-colors">Mes services</a>
        </div>

      </div>
    </div>
  </section>
</template>