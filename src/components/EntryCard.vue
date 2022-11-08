<template>
  <li class="entry-card">
    <RecipientBank :name="entry.recipientBank" />
    <TransferSystem :name="entry.system" />
    <ul class="entry-card__currency">
      <li v-for="(currency, curIndex) in entry.receiveCurrency" :key="curIndex">
        {{ currency }}
      </li>
    </ul>
    <ul class="entry-card__type">
      <li v-for="(type, typeIndex) in entry.receiveType" :key="typeIndex">
        {{ type === "Cash" ? "В отделении" : "На карту" }}
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TransferSystem from "@/components/TransferSystem.vue";
import RecipientBank from "@/components/RecipientBank.vue";

export default defineComponent({
  components: { TransferSystem, RecipientBank },
  name: "EntryCard",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.entry-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 12px;
  border: 1px solid #777777;
  border-radius: 8px;
  &__currency,
  &__type {
    li {
      font-size: 20px;
    }
  }
}
</style>
