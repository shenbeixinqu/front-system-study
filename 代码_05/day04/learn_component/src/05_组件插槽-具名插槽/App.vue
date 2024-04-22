<template>
  <div class="app">
    <nav-bar>
      <template v-slot:left>
          <span>左侧</span>
      </template>
      <template v-slot:center>
        <button>中间</button>
      </template>
      <template #right>
        <a href="">链接</a>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"

export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>