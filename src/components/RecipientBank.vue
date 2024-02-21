<template>
  <div class="recipient-bank">
    <img class="image" :src="src" :alt="name" :title="name" />
    <span class="recipient-bank__name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { GeorgianBanks } from "@/types/transfers";

const props = defineProps<{ name: GeorgianBanks }>();
const src = computed(() => {
  switch (props.name) {
    case "Bank of Georgia":
      return "/img/bog.webp";
    case "TBC":
      return "/img/tbc.webp";
    case "Credo":
      return "/img/credo.webp";
    case "Liberty":
      return "/img/liberty.webp";
    case "Rico Credit":
      return "/img/rico.webp";
    case "CartuBank":
      return "/img/cartu.webp";
    case "BasisBank":
      return "/img/basis.webp";
    case "Halyk Bank":
      return "/img/halyk.webp";
    default:
      return props.name;
  }
});
</script>

<style lang="scss">
.recipient-bank {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  text-align: center;
}
</style>
