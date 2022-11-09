<template>
  <main>
    <fieldset class="filters">
      <legend>Фильтры</legend>
      <InputSelect
        v-model="filters.recipientBank"
        label="Банк"
        :items="['Bank of Georgia', 'TBC', 'Credo', 'Liberty', 'Rico', 'Cartu']"
      />
      <InputSelect
        v-model="filters.system"
        label="Система переводов"
        :items="['Contact', 'Unistream', 'KoronaPay']"
      />
      <InputSelect
        v-model="filters.receiveCurrency"
        label="Валюта"
        :items="['GEL', 'USD', 'EUR']"
      />
      <InputSelect
        v-model="filters.receiveType"
        label="Получение"
        :items="['Card', 'Cash']"
      />
    </fieldset>
    <ul v-if="filteredList" class="list">
      <EntryCard
        v-for="(transfer, index) in filteredList"
        :entry="transfer"
        :key="index"
      />
    </ul>
    <div v-else>Ничего не найдено</div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { transfers } from "@/assets/transfers";
import type {
  GeorgianBanks,
  ReceiveCurrency,
  ReceiveType,
  TransferSystem,
} from "@/assets/transfers";
import InputSelect from "@/components/InputSelect.vue";
import EntryCard from "@/components/EntryCard.vue";

interface Filters {
  recipientBank: GeorgianBanks | "";
  system: TransferSystem | "";
  receiveType: ReceiveType | "";
  receiveCurrency: ReceiveCurrency | "";
}

export default defineComponent({
  components: { InputSelect, EntryCard },
  name: "App",
  setup() {
    const filters = reactive<Filters>({
      recipientBank: "",
      system: "",
      receiveType: "",
      receiveCurrency: "",
    });
    const filteredList = computed(() => {
      return transfers.filter(
        ({ recipientBank, system, receiveType, receiveCurrency }) => {
          if (
            filters.recipientBank &&
            filters.recipientBank !== recipientBank
          ) {
            return false;
          }
          if (filters.system && filters.system !== system) {
            return false;
          }
          if (
            filters.receiveType &&
            !receiveType.includes(filters.receiveType)
          ) {
            return false;
          }
          if (
            filters.receiveCurrency &&
            !receiveCurrency.includes(filters.receiveCurrency)
          ) {
            return false;
          }
          return true;
        }
      );
    });

    return { filters, filteredList };
  },
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
