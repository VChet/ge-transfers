<template>
  <div v-if="string">{{ string }}</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import type { ReceiveCurrency, TransferSystem } from "@/types/transfers";

const props = defineProps<{ name: TransferSystem; currency: ReceiveCurrency }>();

const rate = ref<number | null>(null);

const currencyString = computed(() => {
  switch (props.currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GEL":
      return "₾";
    default:
      return props.currency;
  }
});

const string = computed(() => {
  if (!rate.value) return null;
  return `1 ${currencyString.value} = ${(1 / rate.value).toFixed(2)} ₽`;
});
</script>
