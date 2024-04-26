<template>
  <div class="login">
    <h2>登录组件</h2>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const loginClick = () => {
    localStorage.setItem('token', "stephanie")
    router.push('/order')
  }
</script>

<style>

</style>