<template>
  <div>
    appContent
  </div>
</template>

<script>
import { onMounted, onUpdated } from 'vue'
// options中的生命周期 出beforecreate 及 created 其它与composition中的  onX 一一对应
export default {
  setup() {
    // 在执行setup函数的过程中 需要注册别的生命周期函数
    onMounted(() => {
      console.log("onmounted")
    })
  }
}
</script>

<style>

</style>