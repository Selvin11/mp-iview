<template>
  <div :class="['i-cell', 'i-input', error ? 'i-input-error' : '', mode === 'wrapped' ? 'i-input-wrapped' : '', iClass]">
    <div v-if="title" class="i-cell-hd i-input-title">{{ title }}</div>
    <textarea
      v-if="type === 'textarea'"
      auto-height
      :disabled="disabled"
      :focus="autofocus"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :class="['i-input-input', 'i-cell-ft', right ? 'i-input-input-right' : '']"
      placeholder-class="i-input-placeholder"
      @input="handleInputChange"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
    >
    </textarea>
    <input
      v-else
      :type="type"
      :disabled="disabled"
      :focus="autofocus"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :class="['i-input-input', 'i-cell-ft', right ? 'i-input-input-right' : '']"
      placeholder-class="i-input-placeholder"
      @input="handleInputChange"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'iInput',
  props: {
    iClass: String,
    title: {
      type: String
    },
    value: [String, Number],
    // text || textarea || password || number
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'normal'
    },
    right: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    }
  },
  methods: {
    handleInputChange (event) {
      const { detail = {} } = event
      const { value = '' } = detail
      this.value = value

      this.$emit('on-change', event)
    },

    handleInputFocus (event) {
      this.$emit('on-focus', event)
    },

    handleInputBlur (event) {
      this.$emit('on-blur', event)
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>