<template>
  <div class="picker-cell address">
    <!-- 这样placeholder无法正常渲染 -->
    <!-- <i-cell :title="title" :value="cellValue" is-link @click="chooseAddress">
      <div class="placeholder">{{ placeholder }}</div>
    </i-cell> -->
    <div 
      @click="chooseAddress" 
      class="i-cell i-cell-access"
    >
      <div class="i-cell-bd">
          <div class="i-cell-text">{{ title }}</div>
      </div>
      <div class="i-cell-ft">
        <div v-if="placeholder && !cellValue" class="placeholder">{{ placeholder }}</div>
        <div v-else>
          {{ cellValue }}
        </div>
      </div>
    </div>
    <div class="picker-dialog-mask" :style="{visibility: showAddressPicker ? 'visible':'hidden'}" @click="addressCancel">
      <div class="picker-wrap" :style="{visibility: showAddressPicker ? 'visible':'hidden'}" :animation="animationAddressMenu">
        <div class="operate-bar">
          <span class="cancel" @click="addressCancel">取消</span>
          <span class="confirm" @click="addressConfrim">确定</span>
        </div>
        <picker-view
          class="picker-view"
          indicator-class="picker-view-column"
          :value="pickerViewValue"
          @change="addressChange"
        >
          <picker-view-column>
            <div v-for="province in provinceOptions" :key="province.code" class="province-col">
              {{ province.name }}
            </div>
          </picker-view-column>
          <picker-view-column>
            <div v-for="city in cityOptions" :key="city.code">
              {{ city.name }}
            </div>
          </picker-view-column>
          <picker-view-column v-if="!hideDistrict">
            <div v-for="district in districtOptions" :key="district.code" class="district-col">
              {{ district.name }}
            </div>
          </picker-view-column>
        </picker-view>
      </div>
    </div>
  </div>
</template>

<script>
import iCell from '../cell'
import {province, city, area} from 'city-data/lib/pc'

export default {
  name: 'iAddress',
  components: {
    iCell
  },
  props: {
    title: {
      // 地址选择器名称
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default: {}
    },
    placeholder: {
      type: String,
      default: ''
    },
    hideDistrict: {
      // 是否隐藏区域
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pickerViewValue: [],
      showAddressPicker: false,
      animationAddressMenu: '', // picker动画
      cellValue: '', // cell中的显示文字
      animation: '', // 动画对象
      provinceOptions: [],
      cityOptions: [],
      districtOptions: []
    }
  },
  created () {
    this.animation = wx.createAnimation({
      duration: 500,
      transformOrigin: '50% 50%',
      timingFunction: 'ease'
    })
    this.animation.translateY(100 + 'vh').step()
    this.animationAddressMenu = this.animation.export()
    let addressData = this.value
    this.getProvince()
    if (!addressData.province) {
      // 默认显示第一个
      this.getCity(this.provinceOptions[0].code)
      this.getArea(this.cityOptions[0].code)
    } else {
      // 传入地址数据
      let provinceIndex = this.provinceOptions.findIndex(province => province.code === addressData.province.code)
      this.getCity(addressData.province.code)
      let cityIndex = this.cityOptions.findIndex(city => city.code === addressData.city.code)
      let districtIndex = 0
      if (addressData.district && !this.hideDistrict) {
        this.getArea(addressData.city.code)
        districtIndex = this.districtOptions.findIndex(district => district.code === addressData.district.code)
        this.cellValue = `${addressData.province.name} ${addressData.city.name} ${addressData.district.name}`
      } else {
        this.cellValue = `${addressData.province.name} ${addressData.city.name}`
      }
      this.pickerViewValue = [provinceIndex, cityIndex, districtIndex]
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
      this.animationAddressMenu = this.animation.export()
      this.showAddressPicker = isShow
    },
    chooseAddress () {
      this.startAddressAnimation(true)
    },
    addressChange (e) {
      let addressIndexArr = e.target.value
      if (this.pickerViewValue[0] !== addressIndexArr[0]) {
        // 省份有变动
        // 根据省获取城市
        this.getCity(this.provinceOptions[addressIndexArr[0]].code)
        // 根据城市获取区域
        this.getArea(this.cityOptions[0].code)
        this.pickerViewValue = [addressIndexArr[0], 0, 0]
      } else {
        // 省份无变动
        // 根据城市获取区域
        this.getArea(this.cityOptions[addressIndexArr[1]].code)
        this.pickerViewValue = addressIndexArr
      }
      // 出发事件，传递参数
      let changeData = {}
      if (!this.hideDistrict) {
        changeData = {
          province: this.provinceOptions[this.pickerViewValue[0]],
          city: this.cityOptions[this.pickerViewValue[1]],
          district: this.districtOptions[this.pickerViewValue[2]]
        }
        this.cellValue = `${changeData.province.name} ${changeData.city.name} ${changeData.district.name}`
      } else {
        changeData = {
          province: this.provinceOptions[this.pickerViewValue[0]],
          city: this.cityOptions[this.pickerViewValue[1]]
        }
        this.cellValue = `${changeData.province.name} ${changeData.city.name}`
      }
      this.$emit('on-change', changeData)
    },
    getProvince () {
      this.provinceOptions = province
    },
    getCity (code) {
      this.cityOptions = []
      for (let k in city) {
        if (city[k]['parentId'] === code) {
          this.cityOptions.push(city[k])
        }
      }
    },
    getArea (code) {
      this.districtOptions = []
      for (let j in area) {
        if (area[j]['parentId'] === code) {
          this.districtOptions.push(area[j])
        }
      }
      if (this.districtOptions.length === 0) {
        this.districtOptions.push({
          code: code + '--',
          name: '--',
          parentId: code
        })
      }
    },
    addressCancel () {
      this.startAddressAnimation(false)
    },
    addressConfrim () {
      if (this.pickerViewValue.length === 0) {
        let changeData = {}
        if (!this.hideDistrict) {
          changeData = {
            province: this.provinceOptions[0],
            city: this.cityOptions[0],
            district: this.districtOptions[0]
          }
          this.cellValue = `${changeData.province.name} ${changeData.city.name} ${changeData.district.name}`
        } else {
          changeData = {
            province: this.provinceOptions[0],
            city: this.cityOptions[0]
          }
          this.cellValue = `${changeData.province.name} ${changeData.city.name}`
        }
        this.$emit('on-change', changeData)
      }
      this.startAddressAnimation(false)
    }
  }
}
</script>
<style lang="less">
@import '../styles/common/picker.less';
.address {
  .picker-wrap {
    .district-col {
      padding-right: 30rpx;
    }
  }
}
</style>
