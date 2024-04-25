<template>
  <div>
    <h2>Home计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <button @click="popularClick">首页-流行</button>
    <button @click="hotClick">首页-热门</button>
    <button @click="songClick">首页-歌单</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import useCounter from '../Hooks/useCounter'
import useTitle from '../Hooks/useTitle'

export default {
  setup() {
    const { counter, increment, decrement} = useCounter()
    
    const title = useTitle("首页")

    const popularClick = () => {
      title.value = "首页-流行"
    }

    const hotClick = () => {
      title.value = "首页-热门"
    }

    const songClick = () => {
      title.value = "首页-歌单"
    }

    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick
    }
  }
}
</script>

<style>

</style>