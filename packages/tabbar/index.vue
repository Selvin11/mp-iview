<template>
  <div :class="['i-tab-bar', fixed ? 'i-tab-bar-fixed' : '', iClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iTabbar',
  props: {
    iClass: String,
    current: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#2d8cf0'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.$on('change', name => {
      let items = this.$children
      const len = items.length

      if (len > 0) {
        items.forEach(item => {
          item.isCurrent = item.name === name
          item.currentColor = this.color
        })
      }
    })
  }
}
</script>


<style lang="less">
@import './index.less';
</style>

