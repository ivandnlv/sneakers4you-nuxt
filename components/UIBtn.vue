<script setup lang="ts">
import type { BtnProps } from "~/types/UI/btn";
interface BtnEmits {
  (e: "click"): void;
}

const { type = "primary" } = defineProps<BtnProps>();
const emits = defineEmits<BtnEmits>();

const btnClasses: { [key in NonNullable<BtnProps["type"]>]: string } = {
  primary: "btn _primary",
  outlined: "btn _outlined",
};

const btnClass = computed(() => btnClasses[type]);
</script>

<template>
  <button :class="btnClass" @click="emits('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import "../assets/sass/variables";

._primary {
  padding: calc(10px + 3px) calc(19px + 3px);
  background: $main-color;
  color: #fff;
  border: none;
  &:hover {
    background: lighten($main-color, 10%);
  }
  &:active {
    background: darken($main-color, 10%);
  }
}

.btn._outlined {
  padding: 10px 19px;
  background: #fff;
  color: $main-color;
  border: 3px solid $main-color;
  transition-property: border, color;
  transition-duration: $animation-duration;
  transition-timing-function: ease-in-out;
  &:hover {
    border-color: lighten($main-color, 15%);
    color: lighten($main-color, 15%);
  }
  &:active {
    border-color: darken($main-color, 10%);
    color: darken($main-color, 10%);
  }
}
.btn {
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  transition: background $animation-duration ease-in-out;
}
</style>
