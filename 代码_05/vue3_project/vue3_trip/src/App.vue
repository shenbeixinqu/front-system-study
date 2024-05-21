<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.showTabBar" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TabBar from './components/tab-bar/tab-bar.vue'
const route = useRoute()
</script>

<style>

</style>