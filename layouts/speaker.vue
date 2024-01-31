<script setup lang="ts">
  const props = defineProps({
    image: {
      type: String,
    },
  });
</script>

<template>
  <div class="slidev-layout speaker w-full h-full grid grid-cols-2">
    <div>
      <slot />
    </div>
    <div class="m-auto">
      <img class="rounded-full w-72 h-72 border-primary border-4" v-if="props.image" :src="props.image" alt="Picture of {{ $slidev.configs.author }}"/>
    </div>

  </div>
</template>

<style>
  .slidev-layout.speaker h1 {
    @apply mb-24;
  }
</style>