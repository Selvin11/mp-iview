<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Msg</div>
      <div class="page__desc">提示页</div>
    </div>
    <div style="margin-top: 100px">
        <i-button type="ghost" @click="handleDefault">默认提醒</i-button>
        <i-button type="ghost" @click="handleSuccess">成功提醒</i-button>
        <i-button type="ghost" @click="handleWarning">警告提醒</i-button>
        <i-button type="ghost" @click="handleError">错误提醒</i-button>
        <i-button type="ghost" @click="handleDuration">自定义持续时间</i-button>
    </div>
    <i-message ref="message" />
  </div>
</template>


<script>
import iButton from '../../../packages/button'
import iMessage from '../../../packages/message'
import {$Message} from '../../../packages/base/index'

export default {
  components: {
    iButton,
    iMessage
  },
  methods: {
    handleDefault () {
      $Message(this, {
        content: '这是一条普通提醒'
      })
    },
    handleSuccess () {
      $Message(this, {
        content: '这是一条成功提醒',
        type: 'success'
      })
    },
    handleWarning () {
      $Message(this, {
        content: '这是一条警告提醒',
        type: 'warning'
      })
    },
    handleError () {
      $Message(this, {
        content: '这是一条错误提醒',
        type: 'error'
      })
    },
    handleDuration () {
      $Message(this, {
        content: '我将在 5 秒后消失',
        duration: 5
      })
    }
  }
}
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>



