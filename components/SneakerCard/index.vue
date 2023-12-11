<script setup lang="ts">
import type { ISneaker } from "~/types";
import { SERVER_BASIC_URL } from "~/utils/variables";

interface SneakerCardProps {
  sneaker: ISneaker["attributes"];
}

const { sneaker } = defineProps<SneakerCardProps>();
const sneakerImgIndex = ref(0);
const isImgChanging = ref(false);
const sneakerImgPath = computed(
  () =>
    `${SERVER_BASIC_URL}${
      sneaker.sneakerImages.data[sneakerImgIndex.value].attributes.formats.small
        ?.url ??
      sneaker.sneakerImages.data[sneakerImgIndex.value].attributes.url
    }`
);

const changeSneakerImgIndex = () => {
  const lastImgIndex = sneaker.sneakerImages.data.length - 1;

  if (sneakerImgIndex.value + 1 <= lastImgIndex) {
    sneakerImgIndex.value += 1;
  } else {
    sneakerImgIndex.value = 0;
  }
};

let changeSneakerImgIndexInterval: null | NodeJS.Timeout = null;

const intervalTime = 1000;

const onCardMouseMove = () => {
  if (!isImgChanging.value) {
    changeSneakerImgIndexInterval = setInterval(
      changeSneakerImgIndex,
      intervalTime
    );
    isImgChanging.value = true;
  }
};
const onCardMouseLeave = () => {
  if (changeSneakerImgIndexInterval) {
    clearInterval(changeSneakerImgIndexInterval);
  }
  sneakerImgIndex.value = 0;
  isImgChanging.value = false;
};
</script>

<template>
  <div class="sneaker-card">
    <UICard>
      <div class="sneaker-card__favs">
        <SneakerCardBtn type="favs" />
      </div>
      <div
        class="sneaker-card__img"
        @mousemove="onCardMouseMove"
        @mouseleave="onCardMouseLeave"
      >
        <NuxtImg :src="sneakerImgPath" :alt="`${sneaker.brand}-image`" />
      </div>
      <p class="sneaker-card__title" :title="sneaker.title">
        {{ sneaker.title }}
      </p>
      <div class="sneaker-card__price">
        <div class="sneaker-card__price-info">
          <span>ЦЕНА:</span>
          <b>{{ sneaker.price.toLocaleString() }} руб.</b>
        </div>
        <div class="sneaker-card__price-btn">
          <SneakerCardBtn type="cart" />
        </div>
      </div>
    </UICard>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/variables";
.sneaker-card {
  position: relative;
  width: 100%;
  height: 260px;
  &__favs {
    position: absolute;
    top: 29px;
    left: 30px;
    z-index: 10;
  }
  &__img {
    width: 100%;
    height: 112px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__title {
    margin-top: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Устанавливает максимальное количество строк */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 34px; /* Максимальная высота строки */
    font-size: 14px;
    font-weight: 400;
  }
  &__price {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    &-info {
      display: flex;
      flex-direction: column;
      span {
        font-size: 11px;
        font-weight: 500;
        color: #bdbdbd;
      }
      b {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
</style>
