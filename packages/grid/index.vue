<template>
  <div class="i-grid-item" :class="iClass" :style="{'width': width}">
    <div class="i-grid-icon">
      <!-- icon -->
      <div
        v-if="type" 
        class="i-icon" 
        :class="['i-icon-' + type]" 
        :style="{fontSize: size + 'px', color: color}"
      >
      </div>
      <!-- label -->
      <div class="i-grid-label" v-if="label">
        <span v-text="label" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iGrid',
  props: {
    iClass: String,
    size: Number,
    color: String,
    type: String, // icon 类型
    label: String // 标题文字
  },
  data () {
    return {
      width: '33.33%'
    }
  }
}
</script>

<style lang="less">
@import './index.less';
@import '../icon/index.less';
</style>
