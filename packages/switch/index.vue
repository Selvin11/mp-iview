<template>
  <div :class="['i-switch', sizeComputed, currentComputed, iClass]" @click="toggle">
    <input type="text" :name="name" :value="value" class="i-switch-hide-input" />
    <div class="i-switch-inner" v-if="value">
        <slot name="open"></slot>
    </div>
    <div class="i-switch-inner" v-else>
        <slot name="close"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iSwitch',
  props: {
    iClass: String,
    value: {
      type: Boolean,
      default: false
    },
    // large small default
    size: {
      type: String,
      default: 'default'
    },
    // is or not disable
    disabled: {
      type: Boolean,
      default: false
    },
    // hidden inut name
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggle () {
      if (this.disabled) return
      const value = !this.value
      this.$emit('change', value)
    }
  },
  computed: {
    sizeComputed () {
      let sizes = ['large', 'default']
      let prefixCls = 'i-switch'
      let index = sizes.indexOf(this.size)
      return prefixCls + (index > -1 ? ('-' + this.size) : 'default')
    },
    currentComputed () {
      let prefixCls = 'i-switch'
      let className = this.value && !this.disabled ? prefixCls + '-checked' : ''
      if (this.disabled) {
        className += ' ' + prefixCls + '-disabled'
      }
      return className
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>