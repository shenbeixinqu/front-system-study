<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div 
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="tabClick(item, index)"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.imgUrl)" alt="">
        <img v-else :src="getAssetURL(item.imgActiveUrl)" alt="">
        <div class="text">{{ item.name }}</div>
    </div> 
    </template>
  </div>
</template>

<script setup>
  import tabbarData from '@/assets/data/tabbar.js'
  import { getAssetURL } from '@/utils/load_assets'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  const currentIndex = ref(0)
  const router = useRouter()

  const tabClick = (item, index) => {
    currentIndex.value = index
    router.push(item.path)
  }
</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    height: 50px;

    border: 1px solid #f3f3f3;

    .active {
      color: var(--primary-color);
    }
  }

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 36px;
  }

  .text {
    font-size: 12px;
    margin-top: 2px;
  }
</style>