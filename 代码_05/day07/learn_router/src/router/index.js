import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '../Views/Home.vue'
// import About from '../Views/About.vue'



const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),

  routes: [
    { 
      path: "/", 
      redirect: "/home"
    },
    { 
      name: "home",
      path: "/home",
      component: () => import('../Views/Home.vue'),
      meta: {
        name: "james",
        age: 19
      },
      children: [
        {
          path: "/home",
          redirect: '/home/recommend'
        },
        {
          path: "ranking",
          component: () => import('../Views/HomeRanking.vue')
        },
        {
          path: "recommend",
          component: () => import('../Views/HomeRecommend.vue')
        }
      ]
    },
    { 
      name: "about",
      path: "/about",
      component: () => import('../Views/About.vue')      
    },
    {
      path: "/user/:id",
      component: () => import('../Views/User.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../Views/NotFound.vue')
    }
  ]
})

export default router