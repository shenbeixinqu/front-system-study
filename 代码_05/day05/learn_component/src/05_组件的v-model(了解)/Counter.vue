<template>
  <div>
    <h2>Counter: {{ modelValue }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeCounter() {
      this.$emit("update:modelValue", 999)
    }
  }
}
</script>

<style>

</style>