<template>
<LightOrDark>
  <template #dark>
    <header>
      <div class="absolute top-0 left-0 right-0 flex flex-row  justify-end p-4">
        <img class="w-36" src="./assets/images/logo-light.svg" alt="logo" />
      </div>
    </header>
  </template>
  <template #light>
    <header>
      <div class="absolute top-0 left-0 right-0 flex flex-row  justify-end p-4">
        <img class="w-36" src="./assets/images/logo-dark.svg" alt="logo" />
      </div>
    </header>
  </template>
</LightOrDark>
</template>
