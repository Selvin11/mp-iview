<template>
  <div class="i-panel" :class="iClass">
    <div v-if="title" :class="['i-panel-title', {'i-panel-title-hide-top': hideTop}]">{{ title }}</div>
    <div :class="['i-panel-content', {'i-panel-without-border': hideBorder}]">
      <slot></slot>
      <!-- 当需要循环panel时，可参照actionsheet -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'iPanel',
  props: {
    iClass: String,
    title: String,
    // 标题顶部距离
    hideTop: {
      type: Boolean,
      default: false
    },
    hideBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>

