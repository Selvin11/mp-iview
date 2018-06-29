<template>
  <div 
    :class="['i-tag', getClass, checkable ? '' : 'i-tag-disable', iClass]" 
    @click="tapTag"
  >
    <slot></slot>
    <span v-text="title"></span>
  </div>
</template>

<script>
export default {
  name: 'iTag',
  props: {
    iClass: String,
    // slot name
    name: {
      type: String,
      default: ''
    },
    // can click or not click
    checkable: {
      type: Boolean,
      default: false
    },
    // is current choose
    checked: {
      type: Boolean,
      default: true
    },
    // background and color setting
    color: {
      type: String,
      default: 'default'
    },
    // tag title
    title: {
      type: String,
      default: ''
    },
    // control fill or not
    type: {
      type: String,
      default: 'dot'
    }
  },
  methods: {
    tapTag () {
      if (this.checkable) {
        const checked = !this.checked
        this.$emit('change', {
          name: this.name,
          checked: checked
        })
      }
    }
  },
  computed: {
    getClass () {
      let initColorList = ['blue', 'green', 'red', 'yellow', 'default']
      let theme = ''
      let className = 'i-tag-'
      if (initColorList.indexOf(this.color) > -1) {
        theme = className + this.color
      }
      if (this.type === 'border') {
        theme = className + this.color + '-border'
      }
      if (this.checkable && this.checked) {
        theme = className + this.color + '-checked'
      } else if (this.checkable && !this.checked) {
        theme = (this.type === 'border' ? className + this.color + '-border' : className + 'none')
      }
      return theme
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
