<template>
  <div class="app">
    <div class="tabs">
      <template v-for="item in tabs" :key="item">
        <button @click="btnClick(item)"
                :class="{active: currentItem === item}"
        >
          {{ item }}
        </button>
      </template>
    </div>
    <div class="views">
      <!-- 方法1 v-if -->
      <!-- <template v-if="currentItem === 'home'">
        <home></home>
      </template>
      <template v-else-if="currentItem === 'about'">
        <about></about>
      </template>
      <template v-else-if="currentItem === 'category'">
        <category></category>  
      </template> -->

      <!-- 方法2 -->
      <!-- 属性is 跟组件名称 -->
      <!-- 给子组件传值及监听子传父的方法 和正常用法一致 -->

      <!-- include 组件的名称来源与组件定义的name名称 多个名称中不能有空格-->
      <keep-alive include="home,about">
        <component :is="currentItem"></component>      
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Category from './views/Category.vue'

export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentItem: "home"
    }
  },
  methods: {
    btnClick(item) {
      this.currentItem = item
    }
  }
}
</script>

<style scoped>
 .active {
   color: red;
 }
</style>