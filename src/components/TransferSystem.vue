<template>
  <img class="transfer-logo" :src="src" :alt="name" :title="name" />
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

<style>
.transfer-logo {
  width: 100px;
}
</style>
