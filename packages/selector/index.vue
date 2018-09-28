<template>
  <div class="selector">
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
    <div class="picker-dialog-mask" :style="{visibility: showSelectorPicker ? 'visible':'hidden'}" @click="selectorCancel"></div>
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
            {{ selectorKey ? selector[selectorKey] : selector }}
          </div>
        </picker-view-column>
      </picker-view>
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
      // 地址选择器名称
      type: String,
      default: ''
    },
    selectorData: {
      type: Array,
      default: []
    },
    placeholder: {
      type: String,
      default: ''
    },
    selectorKey: {
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
    let selectorKey = this.selectorKey
    if (selectorKey) {
      let keyArr = Object.keys(this.selectorData[0])
      let valueKey = keyArr.filter(key => key !== selectorKey)
      this.selectorData.unshift({
        [selectorKey]: this.placeholder,
        [valueKey]: 0
      })
    } else {
      this.selectorData.unshift(this.placeholder || '请选择')
    }
  },
  methods: {
    // 执行动画
    startAddressAnimation (isShow) {
      if (isShow) {
        this.animation.translateY(40 + 'vh').step()
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
      this.cellValue = this.selectorKey ? selectorValue[this.selectorKey] : selectorValue // 设置cell显示文字
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
.selector {
  .placeholder {
    color: #c9c9c9;
  }
  .picker-view {
    width: 100%; 
    height: 40vh;
    line-height: 80rpx;
    text-align: center;
  }
  .picker-view-column {
    height: 80rpx;
  }
}


</style>
