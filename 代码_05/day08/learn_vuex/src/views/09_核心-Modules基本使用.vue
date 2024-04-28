<template>
  <div>
    <h2>计数: {{ $store.state.home.counter }}</h2>
    <h2>getters： {{ $store.getters.doubleAge }}</h2>
    <button @click="btnClick">增加</button>
  </div>
</template>

<script>
//  在分模块引入时  state中数据需要加上模块名  getters mutataions actions则不需要
export default {
  methods: {
    btnClick() {
      this.$store.commit('changeCounter')
    }
  },
}
</script>

<style>

</style>