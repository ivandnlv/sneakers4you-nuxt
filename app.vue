<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import "./assets/sass/variables";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

h1 {
  color: #000;
  font-size: 32px;
  font-weight: 700;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  padding: 40px 0;
  background: $main-color;
}
</style>
