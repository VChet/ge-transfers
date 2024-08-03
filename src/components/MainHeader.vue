<template>
  <header class="main-header">
    <span>
      Последнее обновление: {{ transfersUpdate }}
    </span>
    <span>
      Обратная связь:
      <a href="https://t.me/feedback_void_bot">Telegram</a>
    </span>
  </header>
</template>
<script setup lang="ts">
import dayjs from "dayjs";

const transfersUpdate = dayjs(import.meta.env.VITE_TRANSFERS_UPDATE).format("DD.MM.YY");
</script>
<style lang="scss">
.main-header {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 2rem;
  border-bottom: 1px solid var(--color-border);
}
</style>
