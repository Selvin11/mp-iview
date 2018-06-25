<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Input-Number</div>
      <div class="page__desc">加减输入框</div>
    </div>
    <div class="page__bd">
      <i-panel title="基础用法">
        <div style="padding: 16px">
          <i-input-number :value="value1" :min="0" :max="100" @change="handleChange1" />
        </div>
      </i-panel>

      <i-panel title="小数">
        <div style="padding: 16px">
          <i-input-number :value="value2" :min="0" :max="100" :step="0.2" @change="handleChange2" />
        </div>
      </i-panel>
    </div>
  </div>
</template>

<script>
import iInputNumber from '../../../packages/input-number'
import iPanel from '../../../packages/panel'

export default {
  data () {
    return {
      value1: 1,
      value2: 0.1
    }
  },
  components: {
    iInputNumber,
    iPanel
  },
  methods: {
    handleChange1 (detail) {
      this.value1 = detail.value
    },

    handleChange2 (detail) {
      this.value2 = detail.value
    }
  }
}
</script>

