<template>
  <div>
    <i-datetime
      title="datetime"
      placeholder="请选择"
      @on-change="bindTimeChange"
    >
    </i-datetime>
  </div>
</template>

<script>
import iDatetime from '../../../packages/datetime'
export default {
  components: {
    iDatetime
  },
  data () {
    return {
    }
  },
  methods: {
    bindTimeChange (e) {
      console.log('time', e)
    }
  }
}
</script>
