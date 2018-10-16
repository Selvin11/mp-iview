<template>
  <div>
    <i-selector
      title="单列选择器-数组项非对象"
      :selector-data="selectorData"
      @on-change="selectorChange"
      :value="value"
    >
    </i-selector>
    <i-selector
      title="单列选择器-数组项为对象"
      :selector-data="selectorObjectData"
      placeholder="请选择城市"
      @on-change="selectorChange"
      :value="valueObject"
    >
    </i-selector>
  </div>
</template>

<script>
import iSelector from '../../../packages/selector'
export default {
  components: {
    iSelector
  },
  data () {
    return {
      selectorData: ['中国', '印度'],
      value: '中国',
      valueObject: {
        key: 4,
        value: '印度'
      },
      selectorObjectData: [{
        key: 3,
        value: '中国'
      }, {
        key: 4,
        value: '印度'
      }]
    }
  },
  methods: {
    selectorChange (e) {
      console.log(e)
    }
  }
}
</script>
