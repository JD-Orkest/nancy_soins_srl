<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    
    <main class="flex-grow pt-20"> <SectionsHero />
      <SectionsAbout />
      <SectionsServices />
      <SectionsInfosPratiques />
      <SectionsContact />

    </main>

    <TheFooter />
  </div>
</template>

<script setup>
// --- SEO AVANCÉ ---
useSeoMeta({
  title: "Nancy Soins SRL | Infirmière à domicile au Roeulx et alentours",
  description: "Besoin d'une infirmière à domicile au Roeulx, Naast, Thieu ou Gottignies ? Nancy Soins SRL vous propose des soins infirmiers professionnels et conventionnés INAMI 24h/24 et 7j/7. Plus de 40 ans d'expérience.",
  keywords: "infirmiere le roeulx, infirmiere a domicile roeulx, soins a domicile le roeulx, infirmiere conventionnee le roeulx, nancy soins srl"
})

// --- STRUCTURED DATA (Schema.org JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Nancy Soins SRL - Infirmière à domicile",
  "telephone": "+32495438490",
  "email": "andriesnancy17@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Clos Saint Feuillien 17",
    "addressLocality": "Le Roeulx",
    "postalCode": "7070",
    "addressCountry": "BE"
  },
  "areaServed": [
    "Le Roeulx", "Thieu", "Gottignies", "Houdeng", "Strépy", "Naast"
  ],
  "openingHours": "Mo-Su 00:00-24:00"
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd)
    }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})
</script>