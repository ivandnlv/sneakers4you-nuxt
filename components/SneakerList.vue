<script setup lang="ts">
import { SERVER_BASIC_URL } from "~/utils/variables";
import type { ISneakerResponse } from "~/types";

const { data: sneakers }: { data: Ref<ISneakerResponse> } = await useFetch(
  `${SERVER_BASIC_URL}/api/sneakers?populate=*`,
);

</script>

<template>
  <div class="sneaker-list">
    <SneakerCard
      v-for="item in sneakers.data"
      :sneaker="item.attributes"
      :key="item.attributes.sneakerId"
    />
  </div>
</template>

<style scoped lang="scss">
.sneaker-list {
  display: grid;
  align-items: start;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 210px);
  gap: 40px;
}
</style>
