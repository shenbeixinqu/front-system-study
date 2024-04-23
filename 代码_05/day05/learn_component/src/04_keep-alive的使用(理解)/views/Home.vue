<template>
  <div>
    <h2>Home组件</h2>
    <h2>当前技术: {{ counter }}</h2>
    <button @click="btnClick">+1</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    btnClick() {
      this.counter++
    }
  },
  created() {
    console.log("home created")
  },
  unmounted() {
    console.log("home unmounted")
  },
}
</script>

<style>

</style>