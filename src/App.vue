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
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useArrayFilter } from "@vueuse/core";

import ListFilters from "@/components/ListFilters.vue";
import TransferCard from "@/components/TransferCard.vue";
import { fetchTransfers } from "@/requests";
import type { FilterValues, Transfer } from "@/types/transfers";

export default defineComponent({
  name: "App",
  components: { ListFilters, TransferCard },
  setup() {
    const filters = reactive<FilterValues>({
      recipientBank: "",
      transferSystem: "",
      receiveType: "",
      receiveCurrency: ""
    });

    const isLoading = ref<boolean>(false);
    const transfers = ref<Transfer[]>([]);
    async function fetchData() {
      isLoading.value = true;
      const data = await fetchTransfers();
      transfers.value = data.sort((a, b) => b.upVotes - a.upVotes);
      isLoading.value = false;
    }
    onMounted(fetchData);

    const filteredList = useArrayFilter(
      transfers,
      ({ recipientBank, transferSystem, receiveType, receiveCurrency }) => {
        if (filters.recipientBank && filters.recipientBank !== recipientBank) {
          return false;
        }
        if (filters.transferSystem && filters.transferSystem !== transferSystem) {
          return false;
        }
        if (filters.receiveType && filters.receiveType !== receiveType) {
          return false;
        }
        if (filters.receiveCurrency && filters.receiveCurrency !== receiveCurrency) {
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
