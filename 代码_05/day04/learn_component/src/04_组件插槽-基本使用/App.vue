<template>
  <div class="app">
    <show-message title="我是文字描述">
      <div>文字描述</div>
    </show-message>
    <show-message title="我是按钮">
      <button>按钮</button>
    </show-message>
  </div>
</template>

<script>
import showMessage from './TabControl.vue'

export default {
  components: {
    showMessage
  }
}
</script>

<style>

</style>