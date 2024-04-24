<template>
  <div>
    <form action="">
      账号: <input type="text" v-model="account.username">
      密码: <input type="password" v-model="account.password">
      <br>
      账号: <input type="text" v-model="username">
      密码: <input type="password" v-model="password">

    </form>
    <br>
    <show-info :name="name" :age="age"></show-info>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue"
import showInfo from './ShowInfo.vue'
export default {
  components: {
    showInfo
  },
  setup() {
    // 定义响应式数据  reactive/ref
    // ref也可以定义复杂的数据
    const info = ref({})
    console.log(info.value)

    // 1.reactive的应用场景
    // 1.1条件一 reactive应用于本地的数据
    // 1.2条件二 多个数据之间有关系/联系 (聚合的数据, 组织在一起会有特定的作用)
    const account = reactive({
      username: "kobe",
      password: "123456"
    })

    const username = ref("james")
    const password = ref("987654")

    // 2.ref的应用场景 其他的应用场景都用ref
    // 定义本地的一些简单数据
    const message = ref("hello world")
    const counter = ref(0)
    const name = ref("why")
    const age = ref(18)

    // 定义从网络中获取的数据也用ref
    const musics = ref([])
    onMounted(() => {
      const serverMusics = ["海阔天空", "小苹果", "野狼"]
      musics.value = serverMusics
    }) 
    return {
      account,
      username,
      password,
      name,
      age
    }
  }
}
</script>

<style>

</style>