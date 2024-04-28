<template>
  <div>
    <h2>当前计数: {{ $store.state.age }}</h2>
    <button @click="btnClickAction">修改age</button>
    <h2>name: {{ $store.state.name }}</h2>
    <button @click="nameClickAction">修改name</button>
  </div>
</template>

<script>
export default {
  methods: {
    btnClickAction() {
      this.$store.dispatch("incrementAction")
    },
    nameClickAction() {
      this.$store.dispatch('changeNameAction', "james")
    }
  },
}
</script>

<style>

</style>