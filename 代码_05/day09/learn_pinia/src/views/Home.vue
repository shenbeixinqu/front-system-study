<template>
  <div>
    <h2>Hello Home</h2>
    <h2>count: {{ countStore.count }}</h2>
    <button @click="changeCount">修改count</button>
    <button @click="changeCountNum">修改Num</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useCounter from '../stores/counter'


  const countStore = useCounter()

  const changeCount = () => {
    countStore.increment()
  }
  const changeCountNum = () => {
    countStore.incrementNum(10)
  }

</script>

<style>

</style>