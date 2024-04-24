<template>
  <div>
    <h2>showInfo: {{ counter }}</h2>
    <h3>showInfo-- {{ name }} --- {{ age }}</h3>
    <button @click="showInfoBtnClick">showInfo修改</button>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineEmits, defineExpose } from 'vue'
  const counter = ref(10)

  // 定义props
  const props = defineProps({
    name: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: 0
    }
  })

  // 定义函数 并且发出事件
  const emits = defineEmits(['infoBtnClick'])
  const showInfoBtnClick = () => {
    emits('infoBtnClick', 'showInfo内部发生了点击')
  }

  const foo = () => {
    console.log("foo function")
  }

  defineExpose({
    foo
  })


</script>

<style>

</style>