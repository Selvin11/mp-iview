<template>
  <div :class="['i-card', {'i-card-full': full}, iClass]">
    <div class="i-card-header" :class="iClass">
      <div class="i-card-header-content">
        <image class="i-card-header-thumb" :src="thumb" mode="aspectFit" v-if="thumb" />
        {{ title }}
      </div>
      <div class="i-card-header-extra" v-if="extra">{{ extra }}</div>
    </div>
    <div class="i-card-body" :class="iClass"><slot name="content"></slot></div>
    <div class="i-card-footer" :class="iClass"><slot name="footer"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'iCard',
  props: {
    iClass: String,
    full: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extra: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>