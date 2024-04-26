<template>
  <div class="app">
    <button @click="changeName">修改name</button>
    <button @click="incrementAge">递增age</button>
    <button @click="changeInfo">修改changeInfo</button>
    <h2>Store name: {{ $store.state.name }}</h2>
    <h2>Store age: {{ $store.state.age }}</h2>
  </div>
</template>

<script>
import { CHANGE_INGO} from '../store/mutation_types'

export default {
  methods: {
    changeName() {
      this.$store.commit('changeName', 'james')
    },
    incrementAge() {
      this.$store.commit('incrementAge')
    },
    changeInfo() {
      this.$store.commit(CHANGE_INGO, {
        name: "curry",
        age: 22
      })
    }
  },  
}
</script>

<style>

</style>