import { createApp } from "vue";
import { useRegisterSW } from "virtual:pwa-register/vue";
import App from "./App.vue";
import "./assets/global.scss";

useRegisterSW({
  immediate: true,
  onRegistered(registration) {
    if (registration) {
      /* eslint-disable no-console */
      console.log("Service worker registered");
    }
  },
  onRegisterError(error) {
    /* eslint-disable no-console */
    console.error(error);
  }
});

createApp(App).mount("#app");
