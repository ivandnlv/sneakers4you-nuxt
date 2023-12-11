<script setup lang="ts">
import PageSlider from "~/components/PageSlider.vue";
</script>

<template>
  <main class="main">
    <div class="main__slider">
      <PageSlider />
    </div>
    <div class="main__content">
      <h1>Все кроссовки</h1>
      <div class="main__content-list">
        <SneakerList />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  &__slider {
    margin-top: 45px;
  }
  &__content {
    margin-top: 40px;
    &-list {
      margin-top: 25px;
    }
  }
}
</style>
