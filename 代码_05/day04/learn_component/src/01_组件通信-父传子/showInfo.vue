<template>
  <!-- 传过来的address 和 active 默认出现在infos上 -->
  <div class="infos">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>
  </div>
</template>

<script>
export default {
  // 传过来的非prop的attribute 不绑定在根标签上
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "zhangsan"
    },
    age: {
      type: Number,
      default: 0
    },
    height: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>

</style>