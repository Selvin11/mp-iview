<template>
  <div>
    <i-cell-group>
      <i-cell title="省份键盘">
        <i-switch :value="test.showProvinces" @change="testShowProvinces"></i-switch>
      </i-cell>
      <i-cell title="字母数字键盘">
        <i-switch :value="test.showAlphanumeric" @change="testShowAlphanumeric"></i-switch>
      </i-cell>
    </i-cell-group>

    <i-keyboard
      :show="test.showProvinces"
      @handle-value="handleKeyboardValue($event, 'test', 'provinces', false)"
      @change="handleProvincesKeyboardChange"
    >
    </i-keyboard>
    
    <i-keyboard
      :show="test.showAlphanumeric"
      @handle-value="handleKeyboardValue($event, 'test', 'alphanumeric', false)"
      @handle-delete="handleKeyboardValue($event, 'test', 'alphanumeric', true)"
      @change="handleAlphanumericKeyboardChange"
      type="alphanumeric"
    >
    </i-keyboard>
  </div>
</template>
<script>
  import iCellGroup from '../../../packages/cell-group'
  import iCell from '../../../packages/cell'
  import iSwitch from '../../../packages/switch'
  import iKeyboard from '../../../packages/keyboard'

  export default {
    components: {
      iCellGroup,
      iCell,
      iSwitch,
      iKeyboard
    },
    methods: {
      testShowProvinces (value) {
        this.test.showProvinces = value
      },
      testShowAlphanumeric (value) {
        this.test.showAlphanumeric = value
      },
      handleProvincesKeyboardChange (value) {
        this.test.showProvinces = value
      },
      handleAlphanumericKeyboardChange (value) {
        this.test.showAlphanumeric = value
      },
      /**
       * @description 处理键盘值
       * @param { String } val 键盘的值
       * @param { Object } testValue 测试组的值
       * @param { String } type= 'provinces' || 'alphanumeric' 键盘的类型
       * @param { Boolean } isDel = true || false 是否是删除操作
       */
      handleKeyboardValue (val, testValue, type, isDel) {
        if (isDel) {
          this[testValue][type] = this[testValue][type].substring(0, this[testValue][type].length - 1)
        }
        if (type === 'alphanumeric' && this[testValue][type].length < 7 && !isDel) {
          this[testValue][type] = this[testValue][type] + val
        }
        if (type === 'provinces') {
          this[testValue][type] = val
        }
      }
    },
    props: {},
    data () {
      return {
        test: {
          provinces: '粤',
          alphanumeric: '',
          showProvinces: false,
          showAlphanumeric: false
        }
      }
    }
  }
</script>
<style lang="less">
  @w2: 0.5rpx;
  .search-box{
    .weui_cell{
      padding: 0;
    }
    .vin-label{
      width: 36/@w2;
      height: 27/@w2;
      margin-right: 20/@w2;
      line-height: 80/@w2;
      img{
        display: inline-block;
        width: 100%;
      }
    }
    .label{
      display: flex;
      align-items: center;
      padding: 20/@w2 15/@w2;
      margin-right: 20/@w2;
      line-height: 60/@w2;
      background-color: #eeeeee;
      border-radius: 4px;
      span{
        display: inline-block;
        font-size: 15px;
        line-height: 15/@w2;
      }
    }
    .icon{
      display: inline-block;
      margin: 6px 0 0 3px;
      width:0px;
      height:0px;
      border: 12/@w2 solid  #5d5c57;
      border-top-color: #5d5c57;
      border-bottom-color:transparent;
      border-left-color:transparent;
      border-right-color:transparent;
    }
  }
  .search{
    &:before{
      font-size: 20px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
</style>
