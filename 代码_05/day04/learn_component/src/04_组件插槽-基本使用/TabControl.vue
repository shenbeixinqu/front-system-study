<template>
  <div class="tab">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot>我是默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>