<template>
  <div class="app">
    <!-- 1.计数器 -->
    <!-- <home></home>
    <hr>
    <about></about> -->

    <!-- 2.页面切换 -->
    <button @click="currentPage === 'home'">home</button>
    <button @click="currentPage === 'about'">about</button>
    <component :is="currentPage"></component>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import { ref } from 'vue'

export default {
  components: {
    Home,
    About
  },
  setup() {
    const currentPage = ref("home")
    return {
      currentPage
    }
  }
}
</script>

<style>

</style>