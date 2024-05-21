<template>
  <!-- 1.搜索框  -->
  <van-search
    v-model="searchValue"
    shape="round"
    show-action
    @cancel="onCancel"
    placeholder="请输入搜索关键词"
  />

  <!-- 2.tab的切换 -->
  <van-tabs v-model:active="tabActive" color="#ff9854">
    <van-tab title="国内"></van-tab>
    <van-tab title="海外"></van-tab>
  </van-tabs>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getCityAll  } from '@/services'

const router = useRouter();
const searchValue = ref("");
const onCancel = () => {
  router.back();
};

const tabActive = ref()

// 请求城市的数据
getCityAll().then(res => {
  console.log("Res123", res)
})


</script>

<style>
</style>