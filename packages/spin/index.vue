<template>
  <div :class="['i-spin', 'i-spin-' + size, fix ? 'i-spin-fix' : '', custom ? 'i-spin-show-text' : '', fullscreen ? 'i-spin-fullscreen' : '', iClass]">
    <div class="i-spin-main">
      <div class="i-spin-dot"></div>
      <div class="i-spin-text"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iSpin',
  props: {
    iClass: String,
    // small || default || large
    size: {
      type: String,
      default: 'default'
    },
    fix: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
