<template>
  <fieldset class="list-filters">
    <legend>Фильтры</legend>
    <input-select v-model="filters.transferSystem" label="Система переводов" :items="systemOptions" />
    <input-select v-model="filters.recipientBank" label="Банк" :items="bankOptions" />
    <input-select v-model="filters.receiveCurrency" label="Валюта" :items="currencyOptions" />
    <input-select v-model="filters.receiveType" label="Получение" :items="receiveOptions" />
  </fieldset>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import InputSelect from "@/components/InputSelect.vue";
import type { FilterValues, GeorgianBanks, ReceiveCurrency, ReceiveType, Transfer, TransferSystem } from "@/types/transfers";
import { computed } from "vue";

const props = defineProps<{ modelValue: FilterValues, items: Transfer[] }>();
const emit = defineEmits<(e: "update:modelValue", value: number) => void>();

const filters = useVModel(props, "modelValue", emit);
const bankOptions = computed<{ name: string; value: GeorgianBanks }[]>(() => {
  const options = new Set<GeorgianBanks>();
  for (const item of props.items) {
    if (item.recipientBank) { options.add(item.recipientBank); }
  }
  return [...options].map((name) => ({ name, value: name }));
})
const systemOptions = computed<{ name: string; value: TransferSystem }[]>(() => {
  const options = new Set<TransferSystem>();
  for (const item of props.items) {
    if (item.transferSystem) { options.add(item.transferSystem); }
  }
  return [...options].map((name) => ({ name, value: name }));
});
const currencyOptions = computed<{ name: string; value: ReceiveCurrency }[]>(() => {
  const options = new Set<ReceiveCurrency>();
  for (const item of props.items) {
    if (item.receiveCurrency) { options.add(item.receiveCurrency); }
  }
  return [...options].map((name) => ({ name, value: name }));
});
const receiveOptions: { name: string; value: ReceiveType }[] = [
  { name: "На карту", value: "Card" },
  { name: "В отделении", value: "Cash" }
];
</script>

<style lang="scss">
.list-filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  padding: 12px 20px 20px;
  margin-bottom: 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  legend {
    font-size: 18px;
  }

  @media (width <= 500px) {
    padding: 6px 10px 10px;
  }
}
</style>
