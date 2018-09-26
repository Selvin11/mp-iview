<template>
  <div>
    <div class="dialog-mask" :style="{visibility: isShow ? 'visible':'hidden'}" @click="keyboardCancel"></div>
    <div class="keyboard-wrap" :style="{visibility: isShow ? 'visible':'hidden'}" :animation="animationKeyboard">
      <div class="keyboard-content" v-if="type === 'provinces' && isShow">
        <ul
          class="keyboard-list"
          v-for="(i, index) in provincesData"
          :key="index">
          <li
            v-for="(item, itemIndex) in i"
            :key="itemIndex"
            @click="clickKey(item.value, 'provinces')"
            @touchstart="handleTouchStart(item.value)"
            @touchend="handleTouchEnd(item.value)"
            :class="{'touch-start': currentTouchStart === item.value}"
          >
            {{ item.value}}
          </li>
        </ul>
      </div>

      <div class="keyboard-content" v-if="type === 'alphanumeric' && isShow">
        <ul
          class="keyboard-list"
          v-for="(i, index) in alphanumeric"
          :key="index">
          <li
            v-for="(item, itemIndex) in i"
            :key="itemIndex"
            @click="clickKey(item, 'alphanumeric')"
            :class="{
              'delete': item === 'delete' ,
              'touch-start': currentTouchStart === item,
              'end': item === 'end'}"
            @touchstart="handleTouchStart(item)"
            @touchend="handleTouchEnd(item)"
          >
            <span v-if="item === 'delete'"></span>
            <span v-else-if="item === 'end'">完成</span>
            <span v-else>{{ item }}</span>
            <img
              class="delete-icon"
              src="./key_delete_icon.png"
              v-if="item === 'delete'">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import provinces from './provinces_abbreviation'
  import alphanumeric from './alphanumeric'
  export default {
    props: {
      type: {
        type: String,
        default: 'provinces'
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        animationKeyboard: '',
        animation: '',
        provincesData: this.handleProvincesData(), // 省份简称数据
        alphanumeric: this.handleAlphanumericData(), // 字母键盘数据
        isShow: this.show,
        currentTouchStart: '' // 当前按下元素
      }
    },
    watch: {
      show (newValue, oldValue) {
        this.isShow = newValue
      },
      isShow (newValue, oldValue) {
        if (newValue) {
          this.animation.translateY(45 + 'vh').step()
        } else {
          this.animation.translateY(100 + 'vh').step()
        }
        this.animationKeyboard = this.animation.export()
        this.$emit('change', newValue)
      }
    },
    created () {
      this.animation = wx.createAnimation({
        duration: 500,
        transformOrigin: '50% 50%',
        timingFunction: 'ease'
      })
      this.animation.translateY(100 + 'vh').step()
      this.animationKeyboard = this.animation.export()
    },
    methods: {
      keyboardCancel () {
        this.isShow = false
      },
      clickKey (value, type) {
        if (type === 'provinces') {
          this.isShow = false
        }
        if (value === 'delete') {
          this.$emit('handle-delete', value)
        } else if (value === 'end') {
          this.isShow = false
        } else {
          this.$nextTick(() => {
            this.$emit('handle-value', value)
          })
        }
      },
      handleTouchStart (value) {
        this.currentTouchStart = value
      },
      handleTouchEnd (value) {
        this.currentTouchStart = ''
      },
      handleProvincesData () {
        let provincesArr = []
        provincesArr.push(provinces.slice(0, 10))
        provincesArr.push(provinces.slice(10, 19))
        provincesArr.push(provinces.slice(19, 26))
        provincesArr.push(provinces.slice(26))
        return provincesArr
      },
      handleAlphanumericData () {
        let alphanumericArr = []
        alphanumericArr.push(alphanumeric.slice(0, 10))
        alphanumericArr.push(alphanumeric.slice(10, 20))
        alphanumericArr.push(alphanumeric.slice(20, 30))
        alphanumericArr.push(alphanumeric.slice(30))
        return alphanumericArr
      }
    }
  }
</script>
<style lang="less">
  @w2: 1rpx;
  .dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 8;
    background: rgba(0, 0, 0, 0.3);
  }
  .keyboard-wrap {
    position: fixed;
    width: 100%;
    z-index:12;
    background-color: #fff;
  }
  .keyboard-content{
    padding: 20/@w2 10/@w2 25/@w2;
    background-color: #d1d6dc;
    .keyboard-list{
      display: flex;
      justify-content: center;
      &:not(:last-child){
        margin-bottom: 23/@w2;
      }
      li{
        width: 64/@w2;
        height: 90/@w2;
        background-color: #ffffff;
        box-shadow: 0px 2/@w2 8/@w2 0px
        rgba(101, 104, 107, 0.5),
        inset 0px -3/@w2 0px 0px
        rgba(209, 214, 220, 0.5);
        border-radius: 8/@w2;
        text-align: center;
        line-height: 90/@w2;
        list-style-type: none;
        font-size: 15px;
        &:not(:last-child){
          margin-right: 10/@w2;
        }
        &.end{
          width: 138/@w2;
          background-color: #5890ff;
          color: #ffffff;
        }
        &.delete{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .delete-icon{
          display: block;
          width: 44/@w2;
          height: 40/@w2;
        }
        &.touch-start{
          background-color: #8f969e;
        }
      }

    }
  }
</style>
