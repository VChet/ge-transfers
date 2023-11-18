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
import type { FilterValues, GeorgianBanks, ReceiveCurrency, ReceiveType, TransferSystem } from "@/types/transfers";

const props = defineProps<{ modelValue: FilterValues }>();
const emit = defineEmits<{ (e: "update:modelValue", value: number): void }>();

const filters = useVModel(props, "modelValue", emit);
const bankOptions: { name: string; value: GeorgianBanks }[] = [
  { name: "Bank of Georgia", value: "Bank of Georgia" },
  { name: "TBC", value: "TBC" },
  { name: "Credo", value: "Credo" },
  { name: "Liberty", value: "Liberty" },
  { name: "Rico", value: "Rico" },
  { name: "Cartu", value: "Cartu" }
];
const systemOptions: { name: string; value: TransferSystem }[] = [
  { name: "Contact", value: "Contact" },
  { name: "Unistream", value: "Unistream" },
  { name: "KoronaPay", value: "KoronaPay" }
];
const currencyOptions: { name: string; value: ReceiveCurrency }[] = [
  { name: "GEL", value: "GEL" },
  { name: "USD", value: "USD" },
  { name: "EUR", value: "EUR" }
];
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
