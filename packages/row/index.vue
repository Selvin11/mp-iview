<template>
  <view class="i-row" :class="iClass">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'iRow',
  props: {
    iClass: String
  }
}
</script>

<style lang="less">
@import './index.less';
</style>

