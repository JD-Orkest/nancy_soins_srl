<template>
  <section id="a-propos" class="py-24 bg-surface-container-lowest">
    <div class="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      
      <div class="relative rounded-lg overflow-hidden shadow-sm aspect-square md:aspect-[4/5] bg-gray-200">
        <!-- Image portrait : lazy loading (hors viewport initial), WebP pour réduire le poids -->
        <NuxtImg
          src="/images/portrait.png"
          alt="Portrait professionnel de Nancy, infirmière à domicile"
          class="w-full h-full object-cover object-center"
          format="webp"
          quality="80"
          sizes="xs:375px sm:640px md:600px"
          loading="lazy"
          width="600"
          height="750"
        />
      </div>
      
      <div>
        <h2 class="text-3xl font-semibold text-primary mb-6 inline-block border-b-4 border-primary pb-2">À Propos</h2>
        <p class="text-lg leading-relaxed mb-4 text-gray-700">
          Bonjour, moi c'est Nancy. Infirmière passionnée et attentionnée au bien-être de mes patients, j'ai plus de 40 ans d'expérience dans le domaine de la santé.
        </p>
        <p class="text-lg leading-relaxed mb-10 text-gray-700">
          Mon objectif est de vous offrir des soins de qualité supérieure tout en préservant votre confort et votre autonomie au quotidien. Ma pratique repose sur une approche humaine, où l'écoute et le respect de la dignité sont essentiels.
        </p>
        
        <div class="flex gap-12">
          <div>
            <div class="text-4xl font-bold text-primary mb-1">40+</div>
            <div class="text-sm font-label text-gray-600">Années d'expérience</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-primary mb-1">24/7</div>
            <div class="text-sm font-label text-gray-600">Disponibilité locale</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>