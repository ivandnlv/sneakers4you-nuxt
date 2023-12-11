<script setup lang="ts">
import type { ISlide } from "~/types/slide";
import { SERVER_BASIC_URL } from "~/utils/variables";

const { data }: { data: Ref<ISlide> } = await useFetch(
  `${SERVER_BASIC_URL}/api/slides?populate=*`,
);

const slides: globalThis.ComputedRef<{ imgSrc: string; id: string }[]> =
  computed(() => {
    return data.value.data.map((item) => ({
      imgSrc: item.attributes.image.data.attributes.url ?? "",
      id: item.attributes.slideId,
    }));
  });
</script>

<style lang="scss"></style>

<template>
  <div class="slider">
    <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation]"
      :autoplay="{ delay: 10000 }"
    >
      <SwiperSlide v-for="slide in slides" class="slider__slide">
        <NuxtImg :src="SERVER_BASIC_URL + slide.imgSrc" :key="slide.id" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  display: none;
  &._show {
    display: block;
  }
}
</style>

<style scoped lang="scss">
.slider {
  position: relative;
  &__slide {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &__btns {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%;
    display: flex;
    justify-content: space-between;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
