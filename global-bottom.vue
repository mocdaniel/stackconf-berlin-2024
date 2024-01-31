<template>
  <footer>
    <div
      class="absolute bottom-0 left-0 right-0 flex flex-row justify-between px-4 py-2"
    >
      <span class="gradient-text">
        <fa6-brands-square-x-twitter />
        @{{ $slidev.configs.twitter }}
      </span>
      <p v-if="$slidev.configs.event" class="gradient-text">
        {{ $slidev.configs.event }}
      </p>
    </div>
  </footer>
</template>
