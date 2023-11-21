import Vue from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./misc/core-components.js";
import("preline");

new Vue({
  render: (h) => h(App),
}).$mount("#app");
