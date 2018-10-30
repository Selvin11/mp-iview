<template>
  <div>
    <scroll-view v-if="scroll" :scroll-x="true" :class="['i-tabs', 'i-tabs-scroll', fixed ? 'i-tabs-fixed' : '', iClass]">
      <slot></slot>
    </scroll-view>
    <div v-else :class="['i-tabs', fixed ? 'i-tabs-fixed' : '', iClass]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iTabs',
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
    scroll: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    isNext: {
      type: Boolean, // 是否可以进行tab切换
      default: true
    }
  },
  created () {
    this.$on('change', name => {
      let items = this.$children
      const len = items.length

      if (len > 0 && this.isNext) {
        items.forEach(item => {
          item.scroll = this.scroll
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
