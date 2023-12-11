<script setup lang="ts">
import type { BtnProps } from "~/types/UI/btn";
import { AllBtnTypes } from "~/types/UI/btn";
type AuthBtnTitle = "Войти" | "Зарегистрироваться";

interface AuthBtnProps extends BtnProps {
  title: AuthBtnTitle;
}

const { title, type = AllBtnTypes.PRIMARY } = defineProps<AuthBtnProps>();
</script>

<template>
  <div class="auth-btn">
    <UIBtn :type="type">{{ title }}</UIBtn>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/sass/variables";
</style>
