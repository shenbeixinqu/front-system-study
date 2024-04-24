<template>
  <div class="app">
    <h2>当前message: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <hr>
    <show-info 
      name="james"
      :age="18"
      @infoBtnClick="infoBtnClick"
      ref="showInfoRef"
      ></show-info>
    <show-info></show-info>
    <show-info></show-info>

  </div>
</template>

<script setup>
  // 1.所有编写在顶层中的代码, 都是默认暴露给template可以使用
  import { onMounted, ref } from 'vue'
  import showInfo from './showInfo.vue'

  // 定义响应式数据
  const message = ref("hello world")

  // 定义绑定的函数
  const changeMessage = () => {
    message.value = "你好, python"
  }

  const infoBtnClick = (payload) => {
    console.log("payload", payload)
  }

  // 获取组件实例
  const showInfoRef = ref()

  onMounted(() => {
    showInfoRef.value.foo()
  })
</script>

<style>

</style>