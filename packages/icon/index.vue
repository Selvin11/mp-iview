<template>
  <div 
    class="i-icon" 
    :class="['i-icon-' + type, iClass]" 
    :style="{fontSize: size + 'px', color: color}"
    @click="iconClick"
  >
  </div>
</template>

<script>
  export default {
    name: 'iIcon',
    props: {
      // 附加类名，控制样式
      iClass: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 14
      },
      color: {
        type: String,
        default: ''
      }
    },
    methods: {
      iconClick (e) {
        this.$emit('iconClick', e)
      }
    }
  }
</script>

<style lang="less">
  @import './index.less';
</style>
