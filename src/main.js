import Vue from 'vue'
import App from './App.vue'
import {routes} from "./router/index"
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
