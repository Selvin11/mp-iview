<template>
  <div>
    <i-date
      title="日期选择器"
      placeholder="请选择"
      @on-change="bindTimeChange"
    >
    </i-date>
  </div>
</template>

<script>
import iDate from '../../../packages/date'
export default {
  components: {
    iDate
  },
  data () {
    return {
      time: '2018-09-29'
    }
  },
  methods: {
    bindTimeChange (e) {
      console.log('time', e)
    }
  }
}
</script>
