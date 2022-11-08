<template>
  <main>
    <fieldset class="filters">
      <legend>Фильтры</legend>
      <label>
        Банк
        <select v-model="filters.recipientBank">
          <option value="">-</option>
          <option value="Bank of Georgia">Bank of Georgia</option>
          <option value="TBC">TBC</option>
          <option value="Credo">Credo</option>
          <option value="Liberty">Liberty</option>
          <option value="Rico">Rico</option>
          <option value="Cartu">Cartu</option>
        </select>
      </label>
      <label>
        Система переводов
        <select v-model="filters.system">
          <option value="">-</option>
          <option value="Contact">Contact</option>
          <option value="Unistream">Unistream</option>
          <option value="KoronaPay">KoronaPay</option>
        </select>
      </label>
      <label>
        Тип получения
        <select v-model="filters.receiveType">
          <option value="">-</option>
          <option value="Card">Перевод на карту</option>
          <option value="Cash">В отделении</option>
        </select>
      </label>
      <label>
        Валюта
        <select v-model="filters.receiveCurrency">
          <option value="">-</option>
          <option value="GEL">GEL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </label>
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
import EntryCard from "@/components/EntryCard.vue";

interface Filters {
  recipientBank: GeorgianBanks | "";
  system: TransferSystem | "";
  receiveType: ReceiveType | "";
  receiveCurrency: ReceiveCurrency | "";
}

export default defineComponent({
  components: { EntryCard },
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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;
  padding: 0 20px 20px;
  border: 1px solid #272727;
  border-radius: 8px;
  margin-bottom: 12px;
  label {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
