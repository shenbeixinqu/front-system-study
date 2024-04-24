<template>
  <div>
    <h2 ref="title">标题</h2>
    <button ref="btn">按钮</button>
    
    <show-info ref="showInfoRef"></show-info>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import showInfo from './showInfo.vue'

export default {
  components: {
    showInfo
  },
  setup() {
      const title = ref()
      const btn = ref()
      const showInfoRef = ref()
      
      onMounted(() => {
        console.log("title", title.value)
        console.log("btn", btn.value)
        console.log("showinforef", showInfoRef.value)

        showInfoRef.value.btnClick()
      })

      return {
        title,
        btn,
        showInfoRef
      }
  }
}
</script>

<style>

</style>