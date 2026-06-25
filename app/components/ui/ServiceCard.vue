<template>
  <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
    <div class="w-12 h-12 rounded bg-soft-teal flex items-center justify-center mb-4 text-primary">
      <slot name="icon">
        <div class="w-6 h-6 bg-primary/20 rounded-full"></div> </slot>
    </div>
    <h3 class="text-xl font-semibold mb-2 text-primary">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
// On définit les "props" (les propriétés) que l'on pourra injecter dynamiquement
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>