<template>
  <label class="input-select">
    <div class="input-select__label">{{ label }}</div>
    <select v-model="model">
      <option value="">-</option>
      <option v-for="(item, index) in items" :key="index" :value="item[itemValue]">
        {{ item[itemText] }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    label?: string | null;
    modelValue: string | number;
    items: Record<string, any>[];
    itemValue?: string;
    itemText?: string;
  }>(),
  {
    label: null,
    itemValue: "value",
    itemText: "name"
  }
);

const emit = defineEmits<(e: "update:modelValue", value: number) => void>();
const model = useVModel(props, "modelValue", emit);
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
