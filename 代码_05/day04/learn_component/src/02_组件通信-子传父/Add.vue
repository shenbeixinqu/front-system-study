<template>
  <div class="add">
    <button @click="addClick(1)">+1</button>
    <button @click="addClick(5)">+5</button>
    <button @click="addClick(10)">+10</button>
  </div>
</template>

<script>
export default {
  // 如果是多人开发 方便他人查找 并且父组件有方法名提示
  emits: ["add"],
  methods: {
    addClick(count) {
      this.$emit('add', count)
    }
  },
}
</script>

<style>

</style>