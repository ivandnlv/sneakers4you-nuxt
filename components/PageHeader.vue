<script setup lang="ts"></script>

<template>
  <header class="header">
    <NuxtLink href="/" class="header__logo">
      <NuxtImg src="img/logo.png" alt="logo" />
      <div class="header__logo-text">
        <b class="header__logo-text__name">SNEAKERS4YOU</b>
        <span class="header__logo-text__slogan">Кроссовки на любой вкус!</span>
      </div>
    </NuxtLink>
    <slot />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &__logo {
    display: flex;
    align-items: center;
    width: 252px;
    gap: 16px;
    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &__name {
        color: #000;
        font-size: 20px;
        font-weight: 700;
      }
      &__slogan {
        color: #9d9d9d;
        font-size: 14px;
        font-weight: 400;
      }
    }
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
}
</style>
