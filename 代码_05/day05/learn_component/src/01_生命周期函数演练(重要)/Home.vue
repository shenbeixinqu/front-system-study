<template>
  <h2>Home</h2>
</template>

<script>
export default {
  beforeUnmount() {
    console.log("home beforemount")
  },
  unmounted() {
    console.log("home unmounted")
  },
}
</script>

<style>

</style>