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
      path: "/order",
      component: () => import("../Views/Order.vue")
    },
    {
      path: "/login",
      component: () => import("../Views/Login.vue")
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

// 动态路由管理
let isAdmin = true
if (isAdmin) {
  router.addRoute({
    path: "/admin",
    component: () => import('../Views/Admin.vue')
  })
}


// 路由导航守卫 
// 进行任何的路由跳转之前 传入的beforeEach中的函数都会被回调
// 进入到订单页面 判断是否登录
// 情况一: 用户没有登录 跳转到登录页面 进行登录操作
// 情况二： 用户已经登录 直接进入订单页面
router.beforeEach((to, from) => {
  // 进入到订单页面时 判断用户是否登录
  const isLogin = localStorage.getItem("token")
  if (to.path === "/order" && !isLogin) {
    return "/login"
  }
})

export default router