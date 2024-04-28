<template>
  <div>
    <h2>当前计数: {{ $store.state.age }}</h2>
    <button @click="incrementAction">修改age</button>
    <h2>name: {{ $store.state.name }}</h2>
    <button @click="changeNameAction('curry')">修改name</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['incrementAction', 'changeNameAction'])
  },
}
</script>

<style>

</style>