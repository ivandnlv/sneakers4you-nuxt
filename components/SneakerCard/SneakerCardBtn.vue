<script setup lang="ts">
type SneakerCardBtnType = "cart" | "favs";

interface SneakerCardProps {
  type: SneakerCardBtnType;
}

type BtnImgPath = {
  default: string;
  filled: string;
};

const { type } = defineProps<SneakerCardProps>();

const btnImgPaths: { [key in SneakerCardBtnType]: BtnImgPath } = {
  favs: {
    default: "/img/favs-btn-default.svg",
    filled: "/img/favs-btn-fill.svg",
  },
  cart: {
    default: "/img/cart-btn-default.svg",
    filled: "/img/cart-btn-fill.svg",
  },
};

const btnImgPath = ref(btnImgPaths[type].default);

const onBtnClick = () => {
  if (btnImgPath.value === btnImgPaths[type].default) {
    btnImgPath.value = btnImgPaths[type].filled;
  } else {
    btnImgPath.value = btnImgPaths[type].default;
  }
};
</script>

<template>
  <button @click="onBtnClick" class="sneaker-btn">
    <NuxtImg :src="btnImgPath" />
  </button>
</template>

<style scoped lang="scss">
@import "../../assets/sass/variables";
.sneaker-btn {
  cursor: pointer;
  border: none;
  background: none;
  width: 32px;
  height: 32px;
  transition: opacity $animation-duration ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  img {
    width: inherit;
    height: inherit;
  }
}
</style>
