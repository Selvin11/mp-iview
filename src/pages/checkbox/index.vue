<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Checklist</div>
      <div class="page__desc">复选框列表</div>
    </div>
    <div class="page__bd">
      <i-checkbox @checkboxChange="handleFruitChange" :lists="fruit" :position="position">
      </i-checkbox>
    </div>
  </div>
</template>

<script>
import iCheckbox from '../../../packages/checkbox'

export default {
  data () {
    return {
      fruit: [{
        value: 1,
        name: '香蕉',
        checked: true
      }, {
        value: 2,
        name: '苹果'
      }, {
        value: 3,
        name: '西瓜',
        checked: true
      }, {
        value: 4,
        name: '葡萄'
      }],
      position: 'left'
    }
  },
  components: {
    iCheckbox
  },
  methods: {
    handleFruitChange (val) {
      console.log(val)
    }
  }
}
</script>

