<template>
  <div v-if="string">{{ string }}</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import { UnistreamRate } from "@/requests";
import type { ReceiveCurrency, TransferSystem } from "@/types/transfers";

const props = defineProps<{ name: TransferSystem; currency: ReceiveCurrency }>();

async function fetchUnistreamRate() {
  const value = await UnistreamRate(props.currency);
  rate.value = value;
}
function fetchRate() {
  if (props.name === "Unistream") {
    return fetchUnistreamRate();
  }
}
const rate = ref<number | null>(null);
onMounted(fetchRate);

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
