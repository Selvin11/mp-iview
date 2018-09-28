<template>
  <div>
    <i-selector
      title="单列选择器-数组项非对象"
      :selector-data="selectorData"
      @on-change="selectorChange"
    >
    </i-selector>
    <i-selector
      title="单列选择器-数组项非对象"
      :selector-data="selectorData"
      @on-change="selectorChange"
    >
    </i-selector>
    <i-selector
      title="单列选择器-数组项非对象"
      :selector-data="selectorData"
      @on-change="selectorChange"
    >
    </i-selector>
    <i-selector
      title="单列选择器-数组项非对象"
      :selector-data="selectorData"
      @on-change="selectorChange"
    >
    </i-selector>
    <i-selector
      title="单列选择器-数组项为对象"
      :selector-data="selectorObjectData"
      selector-key="name"
      placeholder="请选择城市"
      @on-change="selectorChange"
    >
    </i-selector>
    <i-address
      title="车辆归属地"
      :address-data="addressData"
    >
    </i-address>
  </div>
</template>

<script>
import iSelector from '../../../packages/selector'
import iAddress from '../../../packages/address'
export default {
  components: {
    iSelector,
    iAddress
  },
  data () {
    return {
      selectorData: ['中国', '印度'],
      selectorObjectData: [{
        id: 3,
        name: '中国'
      }, {
        id: 4,
        name: '印度'
      }],
      addressData: {
        province: {
          code: '130000',
          name: '河北省'
        },
        city: {
          code: '130100',
          name: '石家庄市'
        },
        district: {
          code: '130102',
          name: '长安区'
        }
      }
    }
  },
  methods: {
    selectorChange (e) {
      console.log(e)
    }
  }
}
</script>
