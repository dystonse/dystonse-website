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
      redirect: "/route",
    },
    {
      path: "/route",
      name: "Routing",
      component: Routing,
    },
    {
      path: "/explain",
      name: "Explain",
      component: Explain,
    },
    {
      path: "/details/history",
      name: "History",
      component: History,
    },
    {
      path: "/details/algorithm",
      name: "Algorithm",
      component: Algorithm,
    },
    {
      path: "/details/open-data",
      name: "OpenData",
      component: OpenData,
    },
    {
      path: "/details/roadmap",
      name: "Roadmap",
      component: Roadmap,
    },
    {
      path: "/details/benefits",
      name: "Benefits",
      component: Benefits,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
