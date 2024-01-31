<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <slot />

      <div class="mt-12 flex flex-col">
        <p v-if="$slidev.configs.author">{{ $slidev.configs.author }}</p>
        <p v-if="$slidev.configs.event" class="pt-4">{{ $slidev.configs.event }}</p>
        <p v-if="$slidev.configs.date">{{ $slidev.configs.date }}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .slidev-layout.cover {
    @apply h-full grid;

    h1 {
      @apply text-6xl leading-20;
    }

    p {
      @apply opacity-50 -my-0.5;
    }
  }
</style>
