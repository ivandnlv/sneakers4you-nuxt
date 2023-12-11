<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/sass/variables";
.card {
  width: 100%;
  height: 100%;
  padding: 20px 30px 40px 30px;
  border: 1px solid $secondary-color;
  border-radius: 40px;
  transition-property: transform, box-shadow;
  transition-duration: $animation-duration;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>
