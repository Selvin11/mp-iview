<template>
  <div 
    :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" 
    v-if="!closed"
  >
    <div v-if="showIcon" class="i-alert-icon">
      <i-icon type="prompt" v-if="type === 'info'" :size="desc?24:16"></i-icon>
      <i-icon type="success" v-if="type === 'success'" :size="desc?24:16"></i-icon>
      <i-icon type="warning" v-if="type === 'warning'" :size="desc?24:16"></i-icon>
      <i-icon type="delete" v-if="type === 'error'" :size="desc?24:16"></i-icon>
    </div>
    <slot></slot>
    <div class="i-alert-desc">
      <slot name="desc"></slot>
    </div>
    <div class="i-alert-close" v-if="closable" @click="handleTap">
      <i-icon type="close"></i-icon>
    </div>
  </div>
</template>

<script>
import iIcon from '../icon'

export default {
  name: 'iAlert',
  components: {
    iIcon
  },
  props: {
    iClass: String,
    // info, success, warning, error
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      closed: false
    }
  },
  methods: {
    handleTap () {
      this.closed = !this.closed
      this.$emit('close')
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>

