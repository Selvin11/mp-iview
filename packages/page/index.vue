<template>
  <div class="mp-lui-page">
    <div class="i-page" :class="iClass">
      <div class="i-page-prev" v-if="mode === 'button'">
        <button class="i-btn i-page-button i-btn-ghost"  @click="handlePrev"  :class="{'i-btn-disabled': current === 1}">
          <slot name="prev"></slot>
        </button>
      </div>
      <div class="i-page-number" v-if="mode !== 'pointer' && !simple">
        <div class="i-page-number-current">{{ current }}</div>/{{ total }}
      </div>
      <div class="i-page-pointer" v-if="mode === 'pointer'">
        <div class="i-page-pointer-dot" :class="{'current': (index + 1) === current}" v-for="(item, index) in total" :key="index"></div>
      </div>
      <div class="i-page-next" v-if="mode === 'button'">
        <button class="i-btn i-page-button i-btn-ghost"  @click="handleNext" :class="{'i-btn-disabled': current === total}">
          <slot name="next"></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import iButton from '../button'

export default {
  name: 'iPage',
  components: {
    iButton
  },
  props: {
    // 附加类名，控制样式
    iClass: {
      type: String,
      default: ''
    },
    // button || number || pointer
    mode: {
      type: String,
      default: 'button'
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    // 是否隐藏数值
    simple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange (type) {
      this.$emit('change', type)
    },
    handlePrev () {
      if (this.current > 1) {
        this.handleChange('prev')
      }
    },
    handleNext () {
      if (this.current < this.total) {
        this.handleChange('next')
      }
    }
  }
}
</script>

<style lang="less">
  @import './index.less';
</style>
