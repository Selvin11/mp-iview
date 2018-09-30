<template>
  <div class="picker-cell">
    <div 
      @click="chooseDate" 
      class="i-cell i-cell-access"
    >
      <div class="i-cell-bd">
          <div class="i-cell-text">{{ title }}</div>
      </div>
      <div class="i-cell-ft">
        <picker
          class="date-picker"
          :mode="mode"
          :value="value"
          :start="start"
          :end="end"
          :disabled="disabled"
          @change="dateChange"
          @cancel="dateCancel"
        >
          <div v-if="!cellValue && placeholder" class="placeholder">{{ placeholder || '请选择' }}</div>
          <div v-else>
            {{ cellValue }}
          </div>
        </picker>
      </div>
    </div>
  </div>
</template>

<script>
import iCell from '../cell'
export default {
  name: 'iDate',
  components: {
    iCell
  },
  props: {
    title: {
      // 名称
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'date'
    },
    value: [String],
    start: [String], // 有效时间范围的开始
    end: [String], // 有效时间范围的结束
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      cellValue: this.value // cell中的显示文字
    }
  },
  created () {
  },
  methods: {
    // 执行动画
    dateChange (e) {
      this.cellValue = e.target.value
      this.$emit('on-change', e.target.value)
    },
    dateCancel (e) {
      console.log(e, 111)
    }
  }
}
</script>
<style lang="less">
@import '../styles/common/picker.less';
</style>
