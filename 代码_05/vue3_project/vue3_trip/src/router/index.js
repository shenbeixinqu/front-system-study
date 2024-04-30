import { createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import('../views/home/home.vue')
      // component: () => import('@/views/home/home')
    },
    {
      path: "/favor",
      component: () => import('../views/favor/favor.vue')
    },
    {
      path: "/order",
      component: () => import('../views/order/order.vue')
    },
    {
      path: "/message",
      component: () => import('../views/message/message.vue')
    }
  ]
})

export default router