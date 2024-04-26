<template>
  <div>
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <button @click="seeVal">查看</button>
    <h2>setup当前计数: {{ counter }}</h2>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const { counter } = toRefs(store.state)

  const seeVal = () => {
    console.log(store.state)
    console.log(typeof(store.state))
    console.log(toRefs(store.state))
  }

</script>

<style>

</style>