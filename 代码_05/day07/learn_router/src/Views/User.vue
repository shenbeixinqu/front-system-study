<template>
  <div>
    <h3>User组件: {{ $route.params.id }}</h3>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()

</script>

<style>

</style>