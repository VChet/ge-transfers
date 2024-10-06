import { createApp } from "vue";
import dayjs from "dayjs";
import "./assets/global.scss";
import "dayjs/locale/ru";
import App from "./App.vue";

dayjs.locale("ru");

createApp(App).mount("#app");
