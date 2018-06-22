<template>
  <view :class="['i-col', span ? 'i-col-span-' + span : '', offset ? 'i-col-offset-' + offset : '']">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'iCol',
  props: {
    iClass: String,
    span: {
      default: 0,
      type: Number
    },
    offset: {
      default: 0,
      type: Number
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>

