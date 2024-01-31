<template>
  <div class="slidev-layout section flex flex-row justify-center items-center">
    <div>
      <slot />
    </div>
  </div>
</template>

<style>
  .slidev-layout.section {
    background-image: url('assets/images/section-background.png');
    background-size: cover;
  }
  .slidev-layout.section h1 {
    @apply text-8xl;
  }
</style>