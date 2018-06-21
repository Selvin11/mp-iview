<template>
  <div class="i-badge" :class="iClass">
    <slot></slot>
    <div class="i-badge-dot" v-if="dot"></div>
    <div class="i-badge-count" :class="iClassAlone" v-else-if="count !== 0">{{ finalCountComputed }}</div>
  </div>
</template>

<script>
export default {
  name: 'iBadge',
  props: {
    iClass: String,
    iClassAlone: String,
    count: {
      type: Number,
      default: 0
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    finalCountComputed () {
      return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>