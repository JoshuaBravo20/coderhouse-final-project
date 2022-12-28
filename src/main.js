import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@popperjs/core";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import "animate.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBurger,
  faCirclePlus,
  faRightFromBracket,
  faCartShopping,
  faList,
  faPenToSquare,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(
  faBurger,
  faCirclePlus,
  faRightFromBracket,
  faCartShopping,
  faList,
  faPenToSquare,
  faPerson
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueToast);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
