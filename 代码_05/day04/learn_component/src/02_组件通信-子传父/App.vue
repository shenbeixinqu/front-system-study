<template>
  <div>
    <h2>计数: {{ counter }}</h2>
    <add-counter @add="addCount"></add-counter>
    <sub-counter @sub="subCount"></sub-counter>
  </div>
</template>

<script>
import addCounter from './Add.vue'
import subCounter from './Sub.vue'

export default {
  components: {
    addCounter,
    subCounter
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addCount(count) {
      this.counter += count
    },
    subCount(count) {
      this.counter -= count
    }
  },
}
</script>

<style>

</style>