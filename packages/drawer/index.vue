<template>
  <div :class="['i-drawer', visible ? 'i-drawer-show' : '', 'i-drawer-' + mode, iClass]">
    <div v-if="mask" class="i-drawer-mask" @click="handleMaskClick"></div>
    <div class="i-drawer-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iDrawer',
  props: {
    iClass: String,
    visible: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'left' // left right
    }
  },
  methods: {
    handleMaskClick () {
      if (!this.maskClosable) return
      this.$emit('close', {})
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
