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
  name: "EntryCard",
  components: { TransferSystem, RecipientBank },
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss">
.entry-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px 0;
  justify-items: center;
  align-items: center;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: transform 0.3s linear;
  font-size: 20px;
  &__currency,
  &__type {
    text-align: center;
  }
}
</style>
