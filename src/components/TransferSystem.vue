<template>
  <div class="transfer-system">
    <img class="image" :src="src" :alt="name" :title="name" />
    <span class="transfer-system__name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";
import type { TransferSystem } from "@/assets/transfers";

export default defineComponent({
  name: "TransferSystem",
  props: {
    name: {
      type: String as PropType<TransferSystem>,
      required: true,
    },
  },
  setup(props) {
    const src = computed(() => {
      switch (props.name) {
        case "Unistream":
          return "/img/unistream.png";
        case "Contact":
          return "/img/contact.png";
        case "KoronaPay":
          return "/img/koronapay.png";
        default:
          return props.name;
      }
    });
    return { src };
  },
});
</script>

<style lang="scss">
.transfer-system {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
</style>
