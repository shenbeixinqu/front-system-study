<template>
  <div class="app">
    <h2>账户: {{ account.username }}</h2>
    <h2>密码: {{ account.password }}</h2>
    <button @click="changeAccount">修改账户</button>
    <hr>
    <!-- 默认情况下vue会自动为其进行解包 (取出其中value)-->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="add">+1</button>
    <button @click="counter++">+1</button>

    <hr>
    <!-- 使用的时候不需要写.value -->
    <h2>当前计数1: {{ info.counter }}</h2>
    <!-- 修改的时候需要使用.value -->
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    // reactive函数 定义复杂类型的数据
    const account = reactive({
      username: "leblon",
      password: "123456"
    })

    const changeAccount = () => {
      account.username = "kobe"
    }

    // ref 定义简单类型的数据(也可以定义复杂类型的数据)
    const counter = ref(0)

    const add = () => {
      counter.value++
    }

    // ref是浅层解包
    const info = {
      counter
    }

    return {
      account,
      changeAccount,
      counter,
      add,
      info
    }
  }
}
</script>

<style>

</style>