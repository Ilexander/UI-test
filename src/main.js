import Vue from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./components/index.js";
import("preline");



new Vue({
  render: (h) => h(App),
}).$mount("#app");
