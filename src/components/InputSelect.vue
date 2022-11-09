<template>
  <label class="input-select">
    <div class="input-select__label">{{ label }}</div>
    <select v-model="model">
      <option value="">-</option>
      <option v-for="(item, index) in items" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "InputSelect",
  props: {
    label: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      },
    });
    return { model };
  },
});
</script>

<style lang="scss">
.input-select {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  &__label {
    margin-bottom: 4px;
  }
}
</style>
