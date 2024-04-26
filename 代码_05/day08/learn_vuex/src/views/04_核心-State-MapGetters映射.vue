<template>
  <div class="app">
    <h2>doubleCounter: {{ doubleCounter }}</h2>
    <h2>totalAge: {{ totalAge }}</h2>
    <h2>messgae: {{ message }}</h2>
    <!-- 根据id获取某一个朋友的信息 -->
    <h2>id-10001的朋友信息: {{ $store.getters.getFriendById(10001)}}</h2>
    <h2>id-10002的朋友信息: {{ $store.getters.getFriendById(10002)}}</h2>
  
  </div>

</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(['doubleCounter', 'totalAge']),
    ...mapGetters(['getFriendById'])
  }
}
</script>

<script setup>
  import { toRefs, computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  // const { message } = toRefs(store.getters)
  // 针对某一个getterss属性使用computed
  const message = computed(() => store.getters.message)
</script>


<style>

</style>