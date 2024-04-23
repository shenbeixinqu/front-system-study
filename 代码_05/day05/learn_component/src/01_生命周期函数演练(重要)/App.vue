<template>
  <div>
    <h2>{{ message }} - {{ counter }}</h2>
    <button @click="message = 'hello world'">修改message</button>
    <button @click="counter++">+1</button>

    <button @click="isShowhome = !isShowhome">显示Home</button>
    <home v-if="isShowhome"></home>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  components: {
    Home
  },
  data() {
    return {
      message: "hello App",
      counter: 0,
      isShowhome: false
    }
  },
  // 1.组件被创建之前
  beforeCreate() {
    console.log("beforecreate")
  },
  // 2.组件被创建完成
  created() {
    console.log("created")
    console.log("1.发送网络请求, 请求数据")
    console.log("2.监听eventbus事件")
    console.log("3.监听watch数据")
  },
  // 3.组件template准备被挂载
  beforeMount() {
    console.log("beforeMount")
  },
  // 4.组件template被挂载 虚拟DOM -> 真实DOM
  mounted() {
    console.log("mounted")
    console.log("1.获取DOM")
    console.log("2.使用DOM")
  },
  // 5.数据发生变化
  // 5.1 准备更新DOM
  beforeUpdate() {
    console.log('beforeupdate')
  },
  // 5.2 更新DOM
  updated() {
    console.log("updated")
  } 
}
</script>

<style>

</style>