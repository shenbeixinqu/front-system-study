<template>
  <div>
    <h2 @click="info.name= 'james'">App: {{ info }}</h2>
    <h3 @click="changeName">class: {{ info }}</h3>
    <hr>
    <h2>roInfo: {{ roInfo }}</h2>
    <button @click="changeRoname">修改</button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    
    const changeName = () => {
      context.emit('changeName', 'curry')
    }

    const changeRoname = () => {
      context.emit('changeRoname', 'love')
    }
    return {
      changeName,
      changeRoname
    }
  }
}
</script>

<style>

</style>