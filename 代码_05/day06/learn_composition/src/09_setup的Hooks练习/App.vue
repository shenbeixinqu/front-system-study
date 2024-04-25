<template>
  <div class="app">
    <!-- 1.计数器 -->
    <!-- <home></home>
    <hr>
    <about></about> -->
    <button @click="changeTitle">修改title</button>
    <!-- 2.页面切换 -->
    <button @click="currentPage = 'home'">home</button>
    <button @click="currentPage = 'about'">about</button>
    <component :is="currentPage"></component>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import userTitle from './Hooks/useTitle'
import { ref } from 'vue'

export default {
  components: {
    Home,
    About
  },
  setup() {
    const currentPage = ref("home")
    
    const changeTitle = () => {
      userTitle("app")
    }
    return {
      currentPage,
      changeTitle
    }
  }
}
</script>

<style>

</style>