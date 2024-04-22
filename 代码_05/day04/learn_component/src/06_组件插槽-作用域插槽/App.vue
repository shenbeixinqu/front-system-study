<template>
  <div class="app">
    <tab-control :titles="products" @tabItemClick="tabItemClick"></tab-control>
    <h2>{{ productContent[currentIndex] }}</h2>

    <tab-control 
      :titles="products"
       @tabItemClick="tabItemClick"
    >
      <!-- 这里的props是子组件传过来的集合 -->
      <template #default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

  </div>
</template>

<script>
import TabControl from './TabControl.vue'
export default {
  components: {
    TabControl
  }, 
  data() {
    return {
      products: ["头部", "内容", "尾部"],
      productContent: ["头部页面", "内容页面", "尾部页面"],
      currentIndex: 0,
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>

</style>