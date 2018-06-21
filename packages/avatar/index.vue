<template>
  <div :class="['i-avatar', 'i-avatar-' + shape, 'i-avatar-' + size, {'i-avatar-image': src}, iClass]">
    <img :src="src" v-if="src !== ''" />
    <div class="i-avatar-string" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iAvatar',
  props: {
    iClass: String,
    // circle || square
    shape: {
      type: String,
      default: 'circle'
    },
    // small || large || default
    size: {
      type: String,
      default: 'default'
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>

