<template>
  <div class="slidev-layout section flex flex-row justify-center items-center">
    <div>
      <slot />
    </div>
  </div>
</template>

<style>
  .slidev-layout.section {
    background-image: -webkit-gradient(linear,2.52% 96.22% ,99.43% 1.88% ,color-stop(0,rgba(105, 42, 224, 1) ),color-stop(0.0202,rgba(92, 42, 205, 1) ),color-stop(0.0655,rgba(68, 42, 167, 1) ),color-stop(0.1145,rgba(47, 43, 135, 1) ),color-stop(0.1671,rgba(30, 43, 109, 1) ),color-stop(0.2247,rgba(16, 43, 88, 1) ),color-stop(0.2898,rgba(7, 43, 74, 1) ),color-stop(0.3687,rgba(2, 43, 66, 1) ),color-stop(0.5,rgba(0, 43, 63, 1) ),color-stop(0.6329,rgba(0, 43, 66, 1) ),color-stop(0.7128,rgba(2, 45, 74, 1) ),color-stop(0.7787,rgba(5, 47, 88, 1) ),color-stop(0.837,rgba(8, 50, 109, 1) ),color-stop(0.8903,rgba(13, 54, 135, 1) ),color-stop(0.9399,rgba(19, 58, 167, 1) ),color-stop(0.9858,rgba(26, 64, 205, 1) ),color-stop(1,rgba(28, 66, 218, 1) ));
  }
  .slidev-layout.section h1 {
    @apply text-8xl;
  }
</style>