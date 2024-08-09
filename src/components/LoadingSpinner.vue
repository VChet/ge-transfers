<template>
  <div class="loading-spinner">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>
<style lang="scss">
.loading-spinner {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  width: 3.75rem;
  height: 0.8125rem;
  @media (width <= 1400px) {
    right: 50%;
    transform: translateX(50%);
  }
  div {
    position: absolute;
    top: 0;
    width: 0.8125rem;
    height: 0.8125rem;
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
      left: 1.5rem;
      animation: ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      left: 3rem;
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
    transform: translate(1.5rem, 0);
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
