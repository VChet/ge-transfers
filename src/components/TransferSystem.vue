<template>
  <div class="transfer-system">
    <img class="image" :src="src" :alt="name" :title="name" />
    <span class="transfer-system__name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TransferSystem } from "@/types/transfers";

const props = defineProps<{ name: TransferSystem }>();
const src = computed(() => {
  switch (props.name) {
    case "Unistream":
      return "/img/unistream.webp";
    case "Contact":
      return "/img/contact.webp";
    case "KoronaPay":
      return "/img/koronapay.webp";
    default:
      return props.name;
  }
});
</script>

<style lang="scss">
.transfer-system {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
</style>
