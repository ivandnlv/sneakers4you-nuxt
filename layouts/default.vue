<script setup lang="ts"></script>

<template>
  <div class="layout">
    <PageHeader>
      <div class="header__auth">
        <AuthBtn type="outlined" title="Войти" @click="console.log('login')" />
        <AuthBtn title="Зарегистрироваться" />
      </div>
    </PageHeader>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.header__auth {
  display: flex;
  gap: 10px;
  align-items: center;
}
.layout {
  border-radius: 20px;
  min-height: 100vh;
  background: #fff;
  max-width: 1080px;
  margin: 0 auto;
  padding: 41px 73px 51px 73px;
}
</style>
