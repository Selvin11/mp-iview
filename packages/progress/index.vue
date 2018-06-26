<template>
  <div :class="['i-progress', 'i-progress-' + status, !hideInfo ? 'i-progress-show-info' : '', iClass]">
    <div class="i-progress-outer">
        <div class="i-progress-inner">
          <div class="i-progress-bg" :style="{width: percent + '%',height: strokeWidth + 'px'}"></div>
        </div>
    </div>
    <div class="i-progress-text" v-if="!hideInfo">
      <div class="i-progress-text-inner">{{ percent }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iProgress',
  props: {
    iClass: String,
    percent: {
      type: Number,
      default: 0
    },
    // normal || active || wrong || success
    status: {
      type: String,
      default: 'normal'
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    hideInfo: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>