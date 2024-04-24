<template>
  <div class="app">
    <h2>{{ name }} - {{ age }} - {{ height }}</h2>
    <button @click="age++">修改</button>
    <button @click="height = 1.90">身高</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  setup(props) {
    const info = reactive({
      name: "james",
      age: 20,
      height: 1.88
    })
    
    // reactive 被解构后会变成普通的值 失去响应式
    const { name, age } = toRefs(info)
    const height = toRef(info, 'height')
    return {
      info,
      name,
      age,
      height
    }
  }
}
</script>

<style>

</style>