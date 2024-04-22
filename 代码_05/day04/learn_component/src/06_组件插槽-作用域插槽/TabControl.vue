<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="index">
      <div class="tab-control-item"
        @click="itemClick(index)"
        :class="{ active: currentIndex === index }"
      >
        <!-- <span>{{ item }}</span> -->
        <slot :item="item">
          <span>{{ item }}</span>
        </slot>
      </div>  
    </template>
    
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabItemClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
  }
  .tab-control .tab-control-item {
    flex: 1;
    height: 42px;
    line-height: 42px;
    text-align: center;
  }
  .active {
    color: red;
  }
  .tab-control-item.active span {
    border-bottom: 3px solid red;
    padding: 8px;
  }
</style>