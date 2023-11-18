<template>
  <div class="loading-spinner">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "LoadingSpinner" });
</script>
<style lang="scss">
.loading-spinner {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 13px;

  @media (width <= 1400px) {
    right: 50%;
    transform: translateX(50%);
  }
  div {
    position: absolute;
    top: 0;
    width: 13px;
    height: 13px;
    background: var(--highlight);
    border-radius: var(--border-radius);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      left: 0;
      animation: ellipsis1 0.6s infinite;
    }
    &:nth-child(2) {
      left: 0;
      animation: ellipsis2 0.6s infinite;
    }
    &:nth-child(3) {
      left: 24px;
      animation: ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      left: 48px;
      animation: ellipsis3 0.6s infinite;
    }
  }
}

@keyframes ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

@keyframes ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
