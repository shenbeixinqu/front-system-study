<template>
  <div class="app">
    <h2>计数： {{ counter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useCounter from './hooks/useCounter.js'

export default {
  setup() {
    // 方法1 
    // let counter = ref(100)
    // const add = () => {
    //   counter.value++
    // }
    // const sub = () => {
    //   counter.value--
    // }
    // return {
    //   counter,
    //   add,
    //   sub
    // }

    // 方法2
    return {
      ...useCounter()
    }
  }
}
</script>

<style>

</style>