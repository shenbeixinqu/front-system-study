<template>
  <div class="app">
    <h2 ref="title">{{ title }}</h2>
    <button ref="btn" @click="btnClick">修改title</button>
    <banner ref="banner"></banner>
  </div>
</template>

<script>
import Banner from './Banner.vue'
export default {
  components: {
    Banner
  },
  data() {
    return {
      title: "title"
    }
  },
  methods: {
    btnClick() {
      this.title = "modify"
      // 获取h2/button元素
      console.log(this.$refs.title)
      console.log(this.$refs.btn)

      // 获取banner组件实例
      console.log(this.$refs.banner)

      // 在父组件中可以主动调用子组件的对象方法
      this.$refs.banner.bannerClick()

      // 获取banner中的元素
      console.log(this.$refs.banner.$el)
    }
  }
}
</script>

<style>

</style>