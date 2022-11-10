<template>
  <li class="entry-card">
    <TransferSystem :name="entry.system" />
    <RecipientBank :name="entry.recipientBank" />
    <div class="entry-card__currency">
      {{ entry.receiveCurrency }}
    </div>
    <div class="entry-card__type">
      {{ entry.receiveType === "Cash" ? "В отделении" : "На карту" }}
    </div>
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
