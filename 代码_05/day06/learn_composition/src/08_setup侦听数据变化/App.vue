<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="counter++">添加</button>
  </div>
</template>

<script>
import { watch, watchEffect, ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const name = ref("kobe")
    
    watch(counter, (newValue, oldValue) => {
      console.log("new", newValue, "old", oldValue)
    })

    // watchEffect 传入的函数默认会被立即执行
    // 在执行的过程中 会自动收集依赖(依赖那些响应式的数据)

    // watchEffect 能同时收集多个依赖
    watchEffect(() => {
      console.log(counter.value, name.value)
    })

    // 关闭
    // const stopWatch = watchEffect(() => {
    //   console.log(counter.value, name.value)
      
    //   if (counter.value > 10) {
    //     stopWatch()
    //   }
    // })

    return {
      counter,
      name
    }
  }

}
</script>

<style>

</style>