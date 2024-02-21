<template>
  <header>
    Последнее обновление: 21.02.24
    Обратная связь:
    <a href="https://t.me/feedback_void_bot">Telegram</a>
  </header>
  <main>
    <list-filters v-model="filters" :items="transfers" />
    <div v-if="!filteredList.length" class="status-card">
      Загрузка...
    </div>
    <TransitionGroup v-else-if="filteredList.length" name="list" class="list" tag="ul">
      <transfer-card v-for="transfer in filteredList" :key="transfer.id" :entry="transfer" />
    </TransitionGroup>
    <div v-else class="status-card">
      Ничего не найдено
    </div>
  </main>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useStorage } from "@vueuse/core";
import { nanoid } from "nanoid";
import ListFilters from "@/components/ListFilters.vue";
import TransferCard from "@/components/TransferCard.vue";
import transfersData from "@/assets/transfers";
import type { FilterValues, Transfer } from "@/types/transfers";

const filters = useStorage<FilterValues>("filters", {
  recipientBank: "",
  transferSystem: "",
  receiveType: "",
  receiveCurrency: ""
});

const transfers = ref<Transfer[]>(transfersData);

const filteredList = computed(() =>
  transfers.value
    .filter(({ recipientBank, transferSystem, receiveType, receiveCurrency }) => {
      if (filters.value.recipientBank && filters.value.recipientBank !== recipientBank) return false;
      if (filters.value.transferSystem && filters.value.transferSystem !== transferSystem) return false;
      if (filters.value.receiveType && filters.value.receiveType !== receiveType) return false;
      if (filters.value.receiveCurrency && filters.value.receiveCurrency !== receiveCurrency) return false;
      return true;
    })
    .map((entry) => ({ ...entry, id: nanoid() }))
);
</script>
<style lang="scss">
header {
  padding: 0.25rem 2rem;
  border-bottom: 1px solid var(--color-border);
}
main {
  padding: 2rem;
}
.filters {
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
}
.list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  &-move,
  &-enter-active,
  &-leave-active {
    transition:
      transform 0.3s ease-out,
      opacity 0.1s ease-in;
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
  padding: 0.75rem;
  font-size: 1.25rem;
  text-align: center;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>
