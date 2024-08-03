<template>
  <div class="transfer-system">
    <img class="image" :src="src" :alt="name" :title="name">
    <span class="transfer-system__name">{{ name }}</span>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { TransferSystem } from "@/types/transfers";

const props = defineProps<{ name: TransferSystem }>();
const src = computed(() => {
  switch (props.name) {
    case "KoronaPay": return "/img/koronapay.webp";
    case "Сбер": return "/img/sber.webp";
    case "МТС": return "/img/mts.webp";
    default: return props.name;
  }
});
</script>
<style lang="scss">
.transfer-system {
  display: inline-flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
}
</style>
