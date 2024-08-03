<template>
  <ul class="recipient-banks">
    <li v-for="bank in banks" :key="bank" class="recipient-banks__bank">
      <img class="image" :src="getImageUrl(bank)" :alt="bank" :title="bank">
      <span class="recipient-bank__bank-name">{{ bank }}</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { GeorgianBank } from "@/types/transfers";

defineProps<{ banks: GeorgianBank[] }>();
function getImageUrl(bank: GeorgianBank) {
  switch (bank) {
    case "Bank of Georgia": return "/img/bog.webp";
    case "TBC": return "/img/tbc.webp";
    case "Credo": return "/img/credo.webp";
    case "Liberty": return "/img/liberty.webp";
    case "Rico Credit": return "/img/rico.webp";
    case "CartuBank": return "/img/cartu.webp";
    case "BasisBank": return "/img/basis.webp";
    case "Halyk Bank": return "/img/halyk.webp";
    case "Crystal": return "/img/crystal.webp";
    case "Intel Express": return "/img/intelexpress.webp";
    case "Terabank": return "/img/terabank.webp";
    default: return bank;
  }
}
</script>
<style lang="scss">
.recipient-banks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 1rem 1.5rem;
  width: 100%;
  &__bank {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
