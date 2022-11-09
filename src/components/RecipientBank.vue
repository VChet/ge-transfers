<template>
  <div class="recipient-bank">
    <img class="image" :src="src" :alt="name" :title="name" />
    <span class="recipient-bank__name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";
import type { GeorgianBanks } from "@/types/transfers";

export default defineComponent({
  name: "RecipientBank",
  props: {
    name: {
      type: String as PropType<GeorgianBanks>,
      required: true
    }
  },
  setup(props) {
    const src = computed(() => {
      switch (props.name) {
        case "Bank of Georgia":
          return "/img/bog.png";
        case "TBC":
          return "/img/tbc.png";
        case "Credo":
          return "/img/credo.png";
        case "Liberty":
          return "/img/liberty.png";
        case "Rico":
          return "/img/rico.png";
        case "Cartu":
          return "/img/cartu.png";
        default:
          return props.name;
      }
    });
    return { src };
  }
});
</script>

<style lang="scss">
.recipient-bank {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
</style>
