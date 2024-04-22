<template>
  <!-- 个人信息 -->
  <div>
    <!-- 如果当前的属性是一个非prop的attribute 那么该属性会默认添加到子组件的根元素上 -->
    <show-info name="lisi" age="19" height="1.80" class="active" address="北京" />
    <show-info name="wangwu" age="20" height="1.83" />
    <show-info />
  </div>
</template>

<script>
import showInfo from "./showInfo.vue"
export default {
  components: {
    showInfo
  }
}
</script>

<style>

</style>