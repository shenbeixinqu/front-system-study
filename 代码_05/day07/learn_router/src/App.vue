<template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/user/123">用户123</router-link>
      <router-link to="/user/789">用户789</router-link>

      <router-link to="/order">订单</router-link>

      <!-- 编程式导航 -->
      <span @click="homeClick">首页</span>
      <button @click="btnClick">关于</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const homeClick = () => {
    router.push('/home')
  }

  const btnClick = () => {
    // router.push('/about')
    router.push({
      path: "/about",
      query: {
        name: "why",
        age: 19
      }
    })
  }
</script>

<style>

</style>
