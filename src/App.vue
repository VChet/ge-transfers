<template>
  <main>
    <ListFilters v-model="filters" />
    <div v-if="isLoading && !filteredList.length" class="status-card">Загрузка...</div>
    <ul v-else-if="filteredList.length" class="list">
      <TransferCard v-for="transfer in filteredList" :key="transfer.id" :entry="transfer" @fetch="fetchData" />
    </ul>
    <div v-else class="status-card">Ничего не найдено</div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useArrayFilter, useStorage } from "@vueuse/core";
import { nanoid } from "nanoid";

import ListFilters from "@/components/ListFilters.vue";
import TransferCard from "@/components/TransferCard.vue";
import transfersData from "@/assets/transfers";
import type { FilterValues, Transfer } from "@/types/transfers";

export default defineComponent({
  name: "App",
  components: { ListFilters, TransferCard },
  setup() {
    const filters = useStorage<FilterValues>("filters", {
      recipientBank: "",
      transferSystem: "",
      receiveType: "",
      receiveCurrency: ""
    });

    const isLoading = ref<boolean>(false);
    const transfers = ref<Transfer[]>([]);
    async function fetchData() {
      isLoading.value = true;
      transfers.value = transfersData.map((entry) => ({ ...entry, id: entry.id ?? nanoid() }));
      isLoading.value = false;
    }
    onMounted(fetchData);

    const filteredList = useArrayFilter(
      transfers,
      ({ recipientBank, transferSystem, receiveType, receiveCurrency }) => {
        if (filters.value.recipientBank && filters.value.recipientBank !== recipientBank) {
          return false;
        }
        if (filters.value.transferSystem && filters.value.transferSystem !== transferSystem) {
          return false;
        }
        if (filters.value.receiveType && filters.value.receiveType !== receiveType) {
          return false;
        }
        if (filters.value.receiveCurrency && filters.value.receiveCurrency !== receiveCurrency) {
          return false;
        }
        return true;
      }
    );

    return {
      isLoading,
      filters,
      filteredList,
      fetchData
    };
  }
});
</script>

<style lang="scss">
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  padding: 12px 20px 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  margin-bottom: 12px;
  legend {
    font-size: 18px;
  }
}
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.status-card {
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  text-align: center;
  font-size: 20px;
}
</style>
