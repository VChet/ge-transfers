<template>
  <li class="transfer-card">
    <transfer-system :name="entry.transferSystem" />
    <div class="transfer-card__currency">
      {{ entry.receiveCurrency }}
      <currency-rate :currency="entry.receiveCurrency" />
    </div>
    <div class="transfer-card__type">
      <img
        v-if="entry.receiveType === 'Cash'"
        class="image"
        src="/img/cash.webp"
        alt="В отделении"
        title="В отделении"
      >
      <img v-else class="image" src="/img/card.webp" alt="На карту" title="На карту">
    </div>
    <recipient-bank :banks="entry.recipientBank" />
  </li>
</template>
<script setup lang="ts">
import TransferSystem from "@/components/TransferSystem.vue";
import RecipientBank from "@/components/RecipientBank.vue";
import CurrencyRate from "@/components/CurrencyRate.vue";
import type { Transfer } from "@/types/transfers";

defineProps<{ entry: Transfer }>();
</script>
<style lang="scss">
.transfer-card {
  display: grid;
  grid-template-columns: 1fr .5fr 1fr 2fr;
  gap: 1rem 0;
  place-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  transition: transform 0.3s linear;
  will-change: transform, opacity;
  &:hover {
    box-shadow: 0 0 0.25rem var(--highlight);
  }
  &__type {
    display: flex;
    place-items: center;
    padding: 0.25rem;
    background-color: #fff;
    border-radius: var(--border-radius);
  }
  &__currency,
  &__type,
  &__feedback {
    text-align: center;
  }
  &__feedback {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media (width <= 575px) {
      align-items: center;
      text-align: center;
    }
    &-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      width: 100%;
      > button {
        flex: 1;
      }
    }
    &-count {
      font-size: 16px;
      font-feature-settings: "tnum";
      font-variant-numeric: tabular-nums;
    }
    &-negative {
      color: var(--color-negative);
    }
    &-positive {
      color: var(--color-positive);
    }
  }
  @media (width <= 850px) {
    grid-template-columns: repeat(2, 1fr);
    &__feedback {
      grid-column: 1 / -1;
      &-count {
        font-size: inherit;
      }
    }
  }
  @media (width <= 500px) {
    gap: 0.375rem 0.75rem;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
