<template>
  <div>
    <h2>Hello Home</h2>
    <h2>{{ countStore.count }}</h2>
    <h2>解构: {{ count }}</h2>
    <button @click="btnClick">修改count</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useCounter from '../stores/counter.js'
  
  const countStore = useCounter()
  const { count } = storeToRefs(useCounter)

  const btnClick = () => {
    countStore.count++
  }

</script>

<style>

</style>