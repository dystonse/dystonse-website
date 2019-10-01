import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://dystonse.lenaschimmel.de:3000",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
