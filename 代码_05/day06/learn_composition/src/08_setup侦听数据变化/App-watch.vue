<template>
  <div>
    <button @click="message = 'hello python'">{{ message }}</button>
    <hr>
    <button @click="info.height = '1.57'">修改info</button>
  </div>
</template>

<script>
import { ref, reactive, watch} from 'vue'

export default {
  setup() {
    const message = ref("hello world")
    const info = reactive({
      name: "kobe",
      age: 19,
      friend: {
        name: "james",
        height: 1.98
      }
    })
    // 监听数据的变化
    watch(message, (newValue, oldValue) => {
      console.log("new", newValue, "old", oldValue)
    })

    watch(info, (newValue, oldValue) => {
      console.log("new", newValue, "old", oldValue)
    }, {
      deep: true,
      immediate: true
    })
    
    return {
      info,
      message
    }
  }
}
</script>

<style>

</style>