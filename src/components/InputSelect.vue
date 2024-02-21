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

interface InputSelectProps {
  modelValue: string | number
  items: Record<string, any>[]
  label: string | null
  itemValue?: string
  itemText?: string
}

const props = withDefaults(defineProps<InputSelectProps>(), { itemValue: "value", itemText: "name" });

const emit = defineEmits<{ "update:modelValue": [value: InputSelectProps["modelValue"]] }>();
const model = useVModel(props, "modelValue", emit);
</script>
<style lang="scss">
.input-select {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  &__label {
    margin-bottom: 0.25rem;
  }
}
</style>
