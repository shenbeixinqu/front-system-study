<template>
  <div>
    <h2>Hello Home</h2>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="patchState">批量修改</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useUser from '../stores/user'

  const userStore = useUser()
  const { name, age, level } = storeToRefs(userStore)

  const changeState = () => {
    userStore.name = "james",
    userStore.age = 26,
    userStore.level = 105
  }

  const patchState = () => {
    userStore.$patch({
      name: "curry",
      age: 28,
      level: 14
    })
  }

  const resetState = () => {
    userStore.$reset()
  }
  

</script>

<style>

</style>