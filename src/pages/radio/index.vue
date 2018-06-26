<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Radio</div>
      <div class="page__desc">单选框列表</div>
    </div>
    <div class="page__bd">
      <i-radio @radioChange="handleFruitChange" :lists="fruit" :position="position" />

      <i-button @click="handleClick" type="ghost">切换单选框位置</i-button>
    </div>
  </div>
</template>

<script>
import iRadio from '../../../packages/radio'
import iButton from '../../../packages/button'

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
        name: '西瓜'
      }, {
        value: 4,
        name: '葡萄'
      }],
      position: 'left'
    }
  },
  components: {
    iRadio,
    iButton
  },
  methods: {
    handleFruitChange (val) {
      console.log(val)
    },
    handleClick () {
      this.position = this.position.indexOf('left') !== -1 ? 'right' : 'left'
    }
  }
}
</script>
