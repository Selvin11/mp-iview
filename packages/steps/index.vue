<template>
  <div class="i-steps" :class="iClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iSteps',
  props: {
    iClass: String,
    direction: {
      type: String,
      default: 'horizontal' // value has horizontal or vertical
    },
    current: {
      type: Number,
      default: -1
    }
  },
  mounted () {
    let steps = this.$children
    let len = steps.length
    if (len > 0) {
      steps.forEach((step, index) => {
        step.updateDataChange({
          len: len,
          index: index,
          current: this.current,
          direction: this.direction
        })
      })
    }
  },
  watch: {
    current (val) {
      let steps = this.$children
      let len = steps.length
      if (len > 0) {
        steps.forEach((step, index) => {
          step.updateDataChange({
            len: len,
            index: index,
            current: this.current,
            direction: this.direction
          })
        })
      }
    }
  }
}
</script>


<style lang="less">
@import './index.less';
@import '../icon/index.less';
</style>