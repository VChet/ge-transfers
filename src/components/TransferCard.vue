<template>
  <li class="transfer-card">
    <TransferSystem :name="entry.transferSystem" />
    <RecipientBank :name="entry.recipientBank" />
    <div class="transfer-card__currency">
      {{ entry.receiveCurrency }}
      <CurrencyRate :name="entry.transferSystem" :currency="entry.receiveCurrency" />
    </div>
    <div class="transfer-card__type">
      <img
        v-if="entry.receiveType === 'Cash'"
        class="image"
        src="/img/cash.webp"
        alt="В отделении"
        title="В отделении"
      />
      <img v-else class="image" src="/img/card.webp" alt="На карту" title="На карту" />
    </div>
    <div v-if="entry.upVotes || entry.downVotes" class="transfer-card__feedback">
      <template v-if="!leaveFeedback">
        <div class="transfer-card__feedback-count">
          <div>
            Не работает: <span class="transfer-card__feedback-negative">{{ entry.downVotes }}</span>
          </div>
          <div>
            Работает: <span class="transfer-card__feedback-positive">{{ entry.upVotes }}</span>
          </div>
        </div>
        <div>
          <button type="button" @click="leaveFeedback = true">Оставить отзыв</button>
        </div>
      </template>
      <template v-else>
        <textarea ref="textareaRef" v-model="feedbackText" title="Вы можете оставить комментарий" />
        <div class="transfer-card__feedback-row">
          <button type="button" :disabled="isSending" @click="sendFeedback(FeedbackVote.negative)">Не работает</button>
          <button type="button" :disabled="isSending" @click="sendFeedback(FeedbackVote.positive)">Работает</button>
        </div>
      </template>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTextareaAutosize } from "@vueuse/core";
import type { PropType } from "vue";

import TransferSystem from "@/components/TransferSystem.vue";
import RecipientBank from "@/components/RecipientBank.vue";
import CurrencyRate from "@/components/CurrencyRate.vue";
import { sendMethodFeedback } from "@/requests";
import { FeedbackVote } from "@/types/transfersEnum";
import type { Transfer } from "@/types/transfers";

export default defineComponent({
  name: "TransferCard",
  components: { TransferSystem, RecipientBank, CurrencyRate },
  props: {
    entry: {
      type: Object as PropType<Transfer>,
      required: true
    }
  },
  emits: ["fetch"],
  setup(props, { emit }) {
    const { textarea: textareaRef, input: feedbackText } = useTextareaAutosize();
    const leaveFeedback = ref<boolean>(false);
    const isSending = ref<boolean>(false);

    async function sendFeedback(vote: FeedbackVote) {
      isSending.value = true;
      if (!props.entry.id) {
        throw new Error("entry id is undefined");
      }
      try {
        await sendMethodFeedback({
          methodId: props.entry.id,
          comment: feedbackText.value ?? null,
          vote
        });
        emit("fetch");
        leaveFeedback.value = false;
        feedbackText.value = "";
      } catch (error) {
        alert("Ошибка");
      }
      isSending.value = false;
    }

    return {
      FeedbackVote,
      textareaRef,
      leaveFeedback,
      feedbackText,
      isSending,
      sendFeedback
    };
  }
});
</script>

<style lang="scss">
.transfer-card {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;
  justify-items: center;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: transform 0.3s linear;
  font-size: 20px;
  &:hover {
    box-shadow: 0 0 3px var(--highlight);
  }
  > * {
    flex: 1;
    min-width: 150px;
  }
  &__currency,
  &__type {
    text-align: center;
  }
  &__feedback {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    gap: 8px;
    @media (max-width: 575px) {
      align-items: center;
      text-align: center;
    }
    &-row {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
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
      color: #ff0000;
    }
    &-positive {
      color: #008000;
    }
  }
}
</style>
