<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.name }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.imgUrl)" alt="">
            <img v-else :src="getAssetURL(item.imgActiveUrl)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetURL } from "@/utils/load_assets";
import { useRouter } from "vue-router";
import { ref } from "vue";

const currentIndex = ref(0);
const router = useRouter();

const tabClick = (item, index) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<style lang="less" scoped>
.tab-bar {
  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }
}

img {
  height: 26px;
}

</style>