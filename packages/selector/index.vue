<template>
  <div class="picker-cell selector">
    <div 
      @click="chooseSelector" 
      class="i-cell i-cell-access"
    >
      <div class="i-cell-bd">
          <div class="i-cell-text">{{ title }}</div>
      </div>
      <div class="i-cell-ft">
        <div v-if="pickerViewValue[0] === 0 || (pickerViewValue.length === 0 && placeholder)" class="placeholder">{{ placeholder || '请选择' }}</div>
        <div v-else>
          {{ cellValue }}
        </div>
      </div>
    </div>
    <div class="picker-dialog-mask" :style="{visibility: showSelectorPicker ? 'visible':'hidden'}" @click="selectorCancel">
      <div class="picker-wrap" :style="{visibility: showSelectorPicker ? 'visible':'hidden'}" :animation="animationSelectorMenu">
        <div class="operate-bar">
          <span class="cancel" @click="selectorCancel">取消</span>
          <span class="confirm" @click="selectorConfrim">确定</span>
        </div>
        <picker-view
          class="picker-view"
          indicator-class="picker-view-column"
          :value="pickerViewValue"
          @change="selectorChange"
        >
          <picker-view-column>
            <div v-for="(selector, index) in selectorData" :key="index" class="selector-col">
              {{ selector.value || selector }}
            </div>
          </picker-view-column>
        </picker-view>
      </div>
    </div>
  </div>
</template>

<script>
import iCell from '../cell'
export default {
  name: 'iSelector',
  components: {
    iCell
  },
  props: {
    title: {
      // 选择器名称
      type: String,
      default: ''
    },
    selectorData: {
      type: Array,
      default: [] // {key: '', value: ''}
    },
    value: [String, Number, Boolean],
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      pickerViewValue: [], // picker-view选中的索引
      showSelectorPicker: false,
      animationSelectorMenu: '', // picker动画
      cellValue: '', // cell中的显示文字
      animation: '' // 动画对象
    }
  },
  created () {
    this.animation = wx.createAnimation({
      duration: 500,
      transformOrigin: '50% 50%',
      timingFunction: 'ease'
    })
    this.animation.translateY(100 + 'vh').step()
    this.animationSelectorMenu = this.animation.export()

    let isOptionObject = typeof this.selectorData[0] === 'object'

    // 填充选择数组的第一项
    if (isOptionObject) {
      this.selectorData.unshift({
        key: -1,
        value: this.placeholder || '请选择'
      })
    } else {
      this.selectorData.unshift(this.placeholder || '请选择')
    }

    // 设置默认值
    if (this.value !== '') {
      let index = 0

      if (isOptionObject) {
        this.selectorData.forEach((selector, selectorIndex) => {
          if (selector.key == this.value) {
            index = selectorIndex
            this.cellValue = this.selectorData[index].value
            this.pickerViewValue = [index]
          }
        })
      } else {
        this.selectorData.forEach((selector, selectorIndex) => {
          if (selector == this.value) {
            index = selectorIndex
            this.cellValue = this.selectorData[index]
            this.pickerViewValue = [index]
          }
        })
      }
    }
  },
  methods: {
    // 执行动画
    startAddressAnimation (isShow) {
      if (isShow) {
        this.animation.translateY(50 + 'vh').step()
      } else {
        this.animation.translateY(100 + 'vh').step()
      }
      this.animationSelectorMenu = this.animation.export()
      this.showSelectorPicker = isShow
    },
    chooseSelector () {
      this.startAddressAnimation(true)
    },
    selectorChange (e) {
      let selectorValue = this.selectorData[e.target.value[0]] || '' // 选中的数据
      this.pickerViewValue = e.target.value // 选中的索引
      this.cellValue = selectorValue.value // 设置cell显示文字
      this.$emit('on-change', selectorValue)
    },
    selectorCancel () {
      this.startAddressAnimation(false)
    },
    selectorConfrim () {
      this.startAddressAnimation(false)
    }
  }
}
</script>
<style lang="less">
@import '../styles/common/picker.less';

</style>
