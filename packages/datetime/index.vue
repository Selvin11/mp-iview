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
        <div v-if="!cellValue && placeholder" class="placeholder">{{ placeholder || '请选择' }}</div>
        <div v-else>
          {{ cellValue }}
        </div>
      </div>
    </div>
    <div class="picker-dialog-mask" :style="{visibility: showDatePicker ? 'visible':'hidden'}" @click="dateCancel">
      <div class="picker-wrap" :style="{visibility: showDatePicker ? 'visible':'hidden'}" :animation="animationDateMenu">
        <div class="operate-bar">
          <span class="cancel" @click="dateCancel">取消</span>
          <span class="confirm" @click="selectorConfrim">确定</span>
        </div>
        <picker-view
          class="picker-view"
          indicator-class="picker-view-column"
          :value="pickerViewValue"
          @change="dateChange"
        >
          <picker-view-column v-if="yearsOption.length > 0">
            <div v-for="year in yearsOption" :key="year" class="date-col">
              {{ year }}
            </div>
          </picker-view-column>
          <picker-view-column v-if="monthsOption.length > 0">
            <div v-for="month in monthsOption" :key="month" class="date-col">
              {{ month }}
            </div>
          </picker-view-column>
          <picker-view-column v-if="daysOption.length > 0">
            <div v-for="day in daysOption" :key="day" class="date-col">
              {{ day }}
            </div>
          </picker-view-column>
          <picker-view-column v-if="hoursOption.length > 0">
            <div v-for="hour in hoursOption" :key="hour" class="date-col">
              {{ hour }}
            </div>
          </picker-view-column>
          <picker-view-column v-if="minutesOption.length > 0">
            <div v-for="minute in minutesOption" :key="minute" class="date-col">
              {{ minute }}
            </div>
          </picker-view-column>
          <picker-view-column v-if="secondsOption.length > 0">
            <div v-for="second in secondsOption" :key="second" class="date-col">
              {{ second }}
            </div>
          </picker-view-column>
        </picker-view>
      </div>
    </div>
  </div>
</template>

<script>
import iCell from '../cell'
import { addZero, getMaxDay } from './util'

export default {
  name: 'iDatetime',
  components: {
    iCell
  },
  props: {
    title: {
      // 名称
      type: String,
      default: ''
    },
    value: [String],
    formate: {
      type: String,
      default: 'YYYY-MM-DD HH:mm:ss'
    },
    minYear: {
      type: Number,
      default: 2000
    },
    maxYear: {
      type: Number,
      default: 2020
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      pickerViewValue: [], // picker-view选中的索引
      showDatePicker: false,
      animationDateMenu: '', // picker动画
      cellValue: '', // cell中的显示文字
      yearsOption: [],
      monthsOption: [],
      daysOption: [],
      hoursOption: [],
      minutesOption: [],
      secondsOption: [],
      dateTypeArr: [], // 存储事件类型
      dateObject: {
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        second: ''
      }, // 用于生成cell中的文字
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
    this.animationDateMenu = this.animation.export()

    // 判断formate时间格式中包含哪些
    let yearReg = /[Y]{4}/g
    let monthReg = /[M]{2}/g
    let dayReg = /[D]{2}/g
    let hourReg = /[hH]{2}/g
    let minuteReg = /[m]{2}/g
    let secondReg = /[s]{2}/g
    // 进入页面显示的年月日时分秒
    const NOW = new Date()
    let formate = this.formate
    let propDateValue = this.value // prop传入的时间

    // 获取选中时间
    if (propDateValue) {
      let propDate = new Date(propDateValue.replace(/-/g, '/'))
      this.getDateObject(propDate)
    } else {
      this.getDateObject(NOW)
    }
    let dateObject = this.dateObject
    let year = dateObject.year
    let month = dateObject.month
    let days = getMaxDay(year, month)
    let day = dateObject.day
    let hour = dateObject.hour
    let minute = dateObject.minute
    let second = dateObject.second

    // 配置各时间选择列中的数组
    // year
    if (yearReg.test(formate)) {
      for (let k = this.minYear; k <= this.maxYear; k++) {
        this.yearsOption.push(k)
      }
      let pickerYearIndex = this.yearsOption.indexOf(year)
      this.pickerViewValue.push(pickerYearIndex)
      this.dateTypeArr.push('year')
      this.dateObject.year = this.yearsOption[pickerYearIndex]
    }
    // month
    if (monthReg.test(formate)) {
      for (let k = 1; k <= 12; k++) {
        this.monthsOption.push(addZero(k))
      }
      let pickerMonthIndex = this.monthsOption.indexOf(month)
      this.pickerViewValue.push(pickerMonthIndex)
      this.dateTypeArr.push('month')
      this.dateObject.month = this.monthsOption[pickerMonthIndex]
    }
    // day
    if (dayReg.test(formate)) {
      for (let k = 1; k <= days; k++) {
        this.daysOption.push(addZero(k))
      }
      let pickerDayIndex = this.daysOption.indexOf(day)
      this.pickerViewValue.push(pickerDayIndex)
      this.dateTypeArr.push('day')
      this.dateObject.month = this.daysOption[pickerDayIndex]
    }
    // hour
    if (hourReg.test(formate)) {
      for (let k = this.minHour; k <= this.maxHour; k++) {
        this.hoursOption.push(addZero(k))
      }
      let pickerHourIndex = this.hoursOption.indexOf(hour)
      this.pickerViewValue.push(pickerHourIndex)
      this.dateTypeArr.push('hour')
      this.dateObject.hour = this.hoursOption[pickerHourIndex]
    }
    // minute
    if (minuteReg.test(formate)) {
      for (let k = this.minMinute; k <= this.maxMinute; k++) {
        this.minutesOption.push(addZero(k))
      }
      let pickerMinuteIndex = this.minutesOption.indexOf(minute)
      this.pickerViewValue.push(pickerMinuteIndex)
      this.dateTypeArr.push('minute')
      this.dateObject.minute = this.minutesOption[pickerMinuteIndex]
    }
    // second
    if (secondReg.test(formate)) {
      for (let k = 0; k <= 59; k++) {
        this.secondsOption.push(addZero(k))
      }
      let pickerSecondIndex = this.secondsOption.indexOf(second)
      this.pickerViewValue.push(pickerSecondIndex)
      this.dateTypeArr.push('second')
      this.dateObject.second = this.secondsOption[pickerSecondIndex]
    }
    // 如果传入默认时间，则需要在cell中展示
    if (this.value) {
      this.cellValue = this.getDateString(this.pickerViewValue)
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
      this.animationDateMenu = this.animation.export()
      this.showDatePicker = isShow
    },
    chooseDate () {
      this.startAddressAnimation(true)
    },
    dateChange (e) {
      let currentPickerViewValue = this.pickerViewValue
      let changePickerViewValue = e.target.value
      let diffIndexArr = []
      currentPickerViewValue.forEach((value, index) => {
        if (changePickerViewValue[index] !== value) {
          diffIndexArr.push(index)
        }
      })
      // 如果年份或者月份发生改变，则daysOption数组会变化
      diffIndexArr.forEach(diffIndex => {
        if (this.dateTypeArr[diffIndex] === 'year') {
          let daysArr = []
          let days = getMaxDay(this.yearsOption[changePickerViewValue[diffIndex]], this.monthsOption[changePickerViewValue[diffIndex + 1]])
          for (let k = 1; k <= days; k++) {
            daysArr.push(addZero(k))
          }
          this.daysOption = daysArr
        }
        if (this.dateTypeArr[diffIndex] === 'month') {
          let daysArr = []
          let days = getMaxDay(this.yearsOption[changePickerViewValue[0]], this.monthsOption[changePickerViewValue[diffIndex]])
          for (let k = 1; k <= days; k++) {
            daysArr.push(addZero(k))
          }
          this.daysOption = daysArr
        }
      })
      this.pickerViewValue = changePickerViewValue
      // 更新cell中的值
      this.cellValue = this.getDateString(changePickerViewValue)
      this.$emit('on-change', this.cellValue)
    },
    getDateString (pickerViewValue) {
      let cellText = ''
      pickerViewValue.forEach((value, index) => {
        switch (this.dateTypeArr[index]) {
          case 'year':
            this.dateObject.year = this.yearsOption[value]
            cellText = this.dateObject.year + '-'
            break
          case 'month':
            this.dateObject.month = this.monthsOption[value]
            cellText += this.dateObject.month + '-'
            break
          case 'day':
            this.dateObject.day = this.daysOption[value]
            cellText += this.dateObject.day
            break
          case 'hour':
            this.dateObject.hour = this.hoursOption[value]
            if (this.dateObject.day) {
              cellText += ' ' + this.dateObject.hour + ':'
            } else {
              cellText += this.dateObject.hour + ':'
            }
            break
          case 'minute':
            this.dateObject.minute = this.minutesOption[value]
            cellText += this.dateObject.minute
            break
          case 'second':
            this.dateObject.second = this.secondsOption[value]
            cellText += ':' + this.dateObject.second
            break
          default:
            break
        }
      })
      return cellText
    },
    getDateObject (date) {
      this.dateObject = {
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        day: addZero(date.getDate()),
        hour: addZero(date.getHours()),
        minute: addZero(date.getMinutes()),
        second: addZero(date.getSeconds())
      }
    },
    dateCancel () {
      this.startAddressAnimation(false)
    },
    selectorConfrim () {
      // 没有传入value时，默认当前时间，点击确认时改变
      if (!this.value) {
        this.cellValue = this.getDateString(this.pickerViewValue)
        this.$emit('on-change', this.cellValue)
      }
      this.startAddressAnimation(false)
    }
  }
}
</script>
<style lang="less">
@import '../styles/common/picker.less';

</style>
