<template>
  <fieldset class="list-filters">
    <legend>Фильтры</legend>
    <input-select v-model="filters.transferSystem" label="Система переводов" :items="systemOptions" />
    <input-select v-model="filters.receiveCurrency" label="Валюта" :items="currencyOptions" />
    <input-select v-model="filters.receiveType" label="Получение" :items="receiveOptions" />
    <input-select v-model="filters.recipientBank" label="Банк получения" :items="bankOptions" />
  </fieldset>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useVModel } from "@vueuse/core";
import type {
  FilterValues,
  GeorgianBank,
  ReceiveCurrency,
  ReceiveType,
  Transfer,
  TransferSystem

} from "@/types/transfers";
import InputSelect from "@/components/InputSelect.vue";

interface Props {
  modelValue: FilterValues
  items: Transfer[]
}
const props = defineProps<Props>();
const emit = defineEmits<{ "update:modelValue": [value: Props["modelValue"]] }>();

const filters = useVModel(props, "modelValue", emit);
const bankOptions = ref<{ name: string, value: GeorgianBank }[]>([]);
const systemOptions = ref<{ name: string, value: TransferSystem }[]>([]);
const currencyOptions = ref<{ name: string, value: ReceiveCurrency }[]>([]);
const receiveOptions: { name: string, value: ReceiveType }[] = [
  { name: "На карту", value: "Card" },
  { name: "В отделении", value: "Cash" }
];

onBeforeMount(() => {
  const banks = new Set<GeorgianBank>();
  const systems = new Set<TransferSystem>();
  const currency = new Set<ReceiveCurrency>();
  for (const { recipientBank, transferSystem, receiveCurrency } of props.items) {
    recipientBank.forEach((name) => banks.add(name));
    systems.add(transferSystem);
    currency.add(receiveCurrency);
  }
  bankOptions.value = [...banks].map((name) => ({ name, value: name }));
  systemOptions.value = [...systems].map((name) => ({ name, value: name }));
  currencyOptions.value = [...currency].map((name) => ({ name, value: name }));
});
</script>
<style lang="scss">
.list-filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9.375rem, 1fr));
  gap: 0.75rem;
  padding: 0.75rem 1.25rem 1.25rem;
  margin-bottom: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  legend {
    font-size: 1.125rem;
  }
  @media (width <= 500px) {
    padding: 0.375rem 0.625rem 0.625rem;
  }
}
</style>
