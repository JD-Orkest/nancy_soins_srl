<template>
  <section id="services" class="py-24 bg-surface">
    <div class="max-w-[1200px] mx-auto px-4">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl font-semibold text-primary mb-4">Services de Soins</h2>
        <p class="text-lg text-gray-600">Une gamme complète de soins infirmiers adaptés à vos besoins.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <UiServiceCard 
          title="Soins de base" 
          description="Hygiène quotidienne, aide à la toilette et maintien de l'autonomie."
        >
          <template #icon><span class="text-xl font-bold">1</span></template>
        </UiServiceCard>

        <UiServiceCard 
          title="Actes techniques" 
          description="Injections, perfusions, et pansements complexes avec précision médicale."
        >
          <template #icon><span class="text-xl font-bold">2</span></template>
        </UiServiceCard>

        <UiServiceCard 
          title="Suivis spécifiques" 
          description="Prises de sang et suivis cliniques réguliers pour vos pathologies."
        >
          <template #icon><span class="text-xl font-bold">3</span></template>
        </UiServiceCard>

        <UiServiceCard 
          title="Gestion traitements" 
          description="Préparation des piluliers et surveillance de l'observance thérapeutique."
        >
          <template #icon><span class="text-xl font-bold">4</span></template>
        </UiServiceCard>

      </div>
    </div>
  </section>
</template>