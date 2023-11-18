<template>
  <main>
    <list-filters v-model="filters" />
    <div v-if="isLoading && !filteredList.length" class="status-card">Загрузка...</div>
    <TransitionGroup v-else-if="filteredList.length" name="list" class="list" tag="ul">
      <transfer-card v-for="transfer in filteredList" :key="transfer.id" :entry="transfer" @fetch="fetchData" />
    </TransitionGroup>
    <div v-else class="status-card">Ничего не найдено</div>
    <loading-spinner v-show="isLoading" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";
import { nanoid } from "nanoid";
import ListFilters from "@/components/ListFilters.vue";
import TransferCard from "@/components/TransferCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import transfersData from "@/assets/transfers";
import { fetchTransfers } from "@/requests";
import type { FilterValues, Transfer } from "@/types/transfers";

const filters = useStorage<FilterValues>("filters", {
  recipientBank: "",
  transferSystem: "",
  receiveType: "",
  receiveCurrency: ""
});

const isLoading = ref<boolean>(false);
const transfers = ref<Transfer[]>(transfersData);
async function fetchData() {
  isLoading.value = true;
  transfers.value = await fetchTransfers().finally(() => {
    isLoading.value = false;
  });
}
fetchData();

const filteredList = computed(() =>
  transfers.value
    .filter(({ recipientBank, transferSystem, receiveType, receiveCurrency, disabled }) => {
      if (disabled) return false;
      if (filters.value.recipientBank && filters.value.recipientBank !== recipientBank) return false;
      if (filters.value.transferSystem && filters.value.transferSystem !== transferSystem) return false;
      if (filters.value.receiveType && filters.value.receiveType !== receiveType) return false;
      if (filters.value.receiveCurrency && filters.value.receiveCurrency !== receiveCurrency) return false;
      return true;
    })
    .map((entry) => ({
      ...entry,
      id: entry.id ?? nanoid(),
      rating: (entry.upVotes ?? 0) - (entry.downVotes ?? 0)
    }))
    .sort((a, b) => b.rating - a.rating)
);
</script>

<style lang="scss">
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  padding: 12px 20px 20px;
  border: 1px solid var(--color-border);
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
  &-move,
  &-enter-active,
  &-leave-active {
    transition: transform 0.3s ease-out, opacity 0.1s ease-in;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(30vh);
  }
  &-leave-active {
    position: absolute;
    width: 100%;
  }
}
.status-card {
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  text-align: center;
  font-size: 20px;
}
</style>
