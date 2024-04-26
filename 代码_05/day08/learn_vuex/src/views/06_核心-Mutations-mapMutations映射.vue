<template>
  <div class="app">
    <button @click="changeName('王小波')">修改name</button>
    <button @click="incrementAge">递增age</button>
    <button @click="changeInfo({ name: '张三', age: 51 })">修改changeInfo</button>
    <h2>Store name: {{ $store.state.name }}</h2>
    <h2>Store age: {{ $store.state.age }}</h2>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { CHANGE_INGO} from '../store/mutation_types'

export default {
  methods: {
    ...mapMutations(['changeName', 'incrementAge', CHANGE_INGO])
  },  
}
</script>

<style>

</style>