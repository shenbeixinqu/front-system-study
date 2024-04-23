<template>
  <div class="app">
    <counter v-model="appCounter"></counter>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  components: {
    Counter
  },
  data() {
    return {
      appCounter: 100,
    }
  }
}
</script>

<style>

</style>