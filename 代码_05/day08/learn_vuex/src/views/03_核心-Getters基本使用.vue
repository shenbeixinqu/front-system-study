<template>
  <div class="app">
    <h2>双倍: {{ $store.getters.doubleCounter }}</h2>
    <h2>年龄和: {{ $store.getters.totalAge }}</h2>
    <h2>个人信息: {{ $store.getters.message }}</h2>

    <!-- 根据id获取某一个朋友的信息 -->
    <h2>id-10001的朋友信息: {{ $store.getters.getFriendById(10001)}}</h2>
    <h2>id-10002的朋友信息: {{ $store.getters.getFriendById(10002)}}</h2>
  
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>