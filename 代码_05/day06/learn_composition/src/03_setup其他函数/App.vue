<template>
  <div class="app">
    <show-info 
      :info="info"
      :roInfo="roInfo"
      @changeName="changeName"
      @changeRoname="changeRoname"
      ></show-info>
  </div>
</template>

<script>
import { reactive, readonly } from "vue"
import showInfo from "./showInfo.vue"

export default {
  components: {
    showInfo
  },
  setup() {
    const info = reactive({
      name: "kobe",
      age: 19,
      height: 1.85
    })
    const changeName = (payload) => {
      info.name = payload
    }
    const changeRoname = (payload) => {
      info.name = payload
    }
    const roInfo = readonly(info)
    return {
      info,
      changeName,
      changeRoname,
      roInfo
    }    
  }
}
</script>

<style>

</style>