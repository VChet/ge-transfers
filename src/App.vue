<template>
  <main>
    <ListFilters v-model="filters" />
    <ul v-if="filteredList" class="list">
      <EntryCard v-for="(transfer, index) in filteredList" :key="index" :entry="transfer" />
    </ul>
    <div v-else>Ничего не найдено</div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useArrayFilter } from "@vueuse/core";

import ListFilters from "@/components/ListFilters.vue";
import EntryCard from "@/components/EntryCard.vue";
import { transfers } from "@/assets/transfers";
import type { FilterValues } from "@/types/transfers";

export default defineComponent({
  name: "App",
  components: { ListFilters, EntryCard },
  setup() {
    const filters = reactive<FilterValues>({
      recipientBank: "",
      system: "",
      receiveType: "",
      receiveCurrency: ""
    });
    const filteredList = useArrayFilter(transfers, ({ recipientBank, system, receiveType, receiveCurrency }) => {
      if (filters.recipientBank && filters.recipientBank !== recipientBank) {
        return false;
      }
      if (filters.system && filters.system !== system) {
        return false;
      }
      if (filters.receiveType && filters.receiveType !== receiveType) {
        return false;
      }
      if (filters.receiveCurrency && filters.receiveCurrency !== receiveCurrency) {
        return false;
      }
      return true;
    });

    return {
      filters,
      filteredList
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
</style>
