import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader';

Vue.config.productionTip = false

defineIonPhaser(window);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
