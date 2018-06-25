<template>
  <div :class="['i-input-number', 'i-input-number-size-' + size, iClass]">
    <div :class="['i-input-number-minus', value <= min ? 'i-input-number-disabled' : '']" :data-disabled="value <= min" @click="handleMinus">-</div>
    <input :class="['i-input-number-text', min >= max ? 'i-input-number-disabled' : '']" type="number" :value="value" :disabled="min >= max" @blur="handleBlur" />
    <div :class="['i-input-number-plus', value >= max ? 'i-input-number-disabled' : '']" :data-disabled="value >= max" @click="handlePlus">+</div>
  </div>
</template>

<script>
export default {
  name: 'iInputNumber',
  props: {
    iClass: String,
    // small || default || large
    size: String,
    value: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    addNum (num1, num2) {
      let sq1, sq2, m
      try {
        sq1 = num1.toString().split('.')[1].length
      } catch (e) {
        sq1 = 0
      }
      try {
        sq2 = num2.toString().split('.')[1].length
      } catch (e) {
        sq2 = 0
      }
      m = Math.pow(10, Math.max(sq1, sq2))
      return (Math.round(num1 * m) + Math.round(num2 * m)) / m
    },
    handleChangeStep (e, type) {
      const { dataset = {} } = e.currentTarget
      const { disabled } = dataset
      const { step } = this
      let { value } = this

      if (disabled) return null

      if (type === 'minus') {
        value = this.addNum(value, -step)
      } else if (type === 'plus') {
        value = this.addNum(value, step)
      }

      if (value < this.min || value > this.max) return null

      this.handleEmit(value, type)
    },

    handleMinus (e) {
      this.handleChangeStep(e, 'minus')
    },

    handlePlus (e) {
      this.handleChangeStep(e, 'plus')
    },

    handleBlur (e) {
      let { value } = e.detail
      const { min, max } = this

      if (!value) {
        setTimeout(() => {
          this.handleEmit(value)
        }, 16)
        return
      }

      value = +value
      if (value > max) {
        value = max
      } else if (value < min) {
        value = min
      }

      this.handleEmit(value)
    },
    handleEmit (value, type) {
      const data = {
        value: value
      }
      if (type) data.type = type

      this.$emit('change', data)
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>