<template>
  <div>
    <h2>{{ fullName }}</h2>
    <br>
    <h2>{{ scoreLevel }}</h2>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
  setup() {
    const names = reactive({
      firstName: "kobe",
      lastName: "byrant"
    })

    const scoreValue = ref(37)

    const fullName = computed(() => {
      return names.firstName + " " + names.lastName
    })

    const scoreLevel = computed(() => {
      return scoreValue.value > 60 ? '合格' : "不合格"
    })
    return {
      names,
      fullName,
      scoreLevel
    }
  }
}
</script>

<style>

</style>