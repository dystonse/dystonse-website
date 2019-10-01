import Vue from 'vue'
import Router from 'vue-router'

import Algorithm from './views/Algorithm.vue'
import Benefits from './views/Benefits.vue'
import Explain from './views/Explain.vue'
import History from './views/History.vue'
import OpenData from './views/OpenData.vue'
import Roadmap from './views/Roadmap.vue'
import Routing from './views/Routing.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/explain",
    },
    {
      path: "/route",
      name: "Routensuche",
      component: Routing,
    },
    {
      path: "/about",
      name: "Über Dystonse",
      component: Explain,
    },
    {
      path: "/details/history",
      name: "Vorgeschichte",
      component: History,
    },
    {
      path: "/details/algorithm",
      name: "Algorithmus",
      component: Algorithm,
    },
    {
      path: "/details/open-data",
      name: "Open-Data",
      component: OpenData,
    },
    {
      path: "/details/roadmap",
      name: "Zukünftige Features",
      component: Roadmap,
    },
    {
      path: "/details/benefits",
      name: "Erwarteter Nutzen",
      component: Benefits,
    }
  ]
})
