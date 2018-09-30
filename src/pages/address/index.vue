<template>
  <div>
    <i-address
      title="车辆归属地"
      placeholder="请选择"
      @on-change="addressChange" 
      :value="addressValue"
    >
    </i-address>
  </div>
</template>

<script>
import iAddress from '../../../packages/address'
export default {
  components: {
    iAddress
  },
  data () {
    return {
      addressValue: {
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
    addressChange (address) {
      console.log(address)
    }
  }
}
</script>
