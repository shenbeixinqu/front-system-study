<template>
  <div>
    <h2>年龄: {{ $store.state.age.age }}</h2>
    <h2>getters： {{ $store.getters.doubleAge }}</h2>

     <!-- 2.使用getters时, 是直接getters.xxx -->
     <h2>age模块的doubleCounter: {{ $store.getters["age/doubleAge"] }}</h2>

      <button @click="incrementCount">count模块+1</button>
  </div>
</template>

<script>
//  在分模块引入时  state中数据需要加上模块名  getters mutataions actions则不需要
export default {
  methods: {
    incrementCount() {
      this.$store.commit('age/changeAge')
    }
  },
}
</script>

<style>

</style>