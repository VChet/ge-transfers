<template>
  <li class="entry-card">
    <TransferSystem :name="entry.transferSystem" />
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
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";

import TransferSystem from "@/components/TransferSystem.vue";
import RecipientBank from "@/components/RecipientBank.vue";
import { sendMethodFeedback } from "@/requests";
import { FeedbackVote } from "@/types/transfersEnum";
import type { Transfer } from "@/types/transfers";

export default defineComponent({
  name: "EntryCard",
  components: { TransferSystem, RecipientBank },
  props: {
    entry: {
      type: Object as PropType<Transfer>,
      required: true
    }
  },
  setup(props) {
    const leaveFeedback = ref<boolean>(false);
    const feedbackText = ref<string>("");
    const sending = ref<boolean>(false);

    async function sendFeedback(vote: FeedbackVote) {
      sending.value = true;
      await sendMethodFeedback({
        methodId: props.entry.id,
        comment: feedbackText.value,
        vote
      });
      sending.value = false;
    }

    return {
      FeedbackVote,
      leaveFeedback,
      feedbackText,
      sending,
      sendFeedback
    };
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
