<template>
  <button 
    class="i-btn"
    :class="[{'i-btn-long': long}, 'i-btn-' + size, 'i-btn-' + type, 'i-btn-' + shape, {'i-btn-loading' : loading}, {'i-btn-disabled' : disabled}, iClass]"
    @click="handleTap" 
    :open-type="openType" 
    :app-parameter="appParameter" 
    :hover-stop-propagation="hoverStopPropagation" 
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime" 
    :session-from="sessionFrom" 
    :send-message-title="sendMessageTitle" 
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg" 
    :show-message-card="showMessageCard"
    :plain="true"
  >
    <view class="i-btn-loading-inner" v-if="loading"></view>
    <slot/>
    <!-- 当mpvue组件中含有slot时，此组件在循环渲染中无法正常运行，产生bug，因此iButton组件仅能用于单个渲染，当需要循环渲染时使用此原生button替代 -->
  </button>
</template>

<script>
  export default {
    name: 'iButton',
    props: {
      // 附加类名，控制样式
      iClass: {
        type: String,
        default: ''
      },
      // default, primary, ghost, info, success, warning, error
      type: {
        type: String,
        default: ''
      },
      // default, large, small
      size: {
        type: String,
        default: ''
      },
      // circle, square
      shape: {
        type: String,
        default: 'square'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      long: {
        type: Boolean,
        default: false
      },
      // 小程序原生button附带属性，具体可参考小程序文档
      openType: String,
      appParameter: String,
      hoverStopPropagation: Boolean,
      hoverStartTime: {
        type: Number,
        default: 20
      },
      hoverStayTime: {
        type: Number,
        default: 70
      },
      lang: {
        type: String,
        default: 'en'
      },
      sessionFrom: {
        type: String,
        default: ''
      },
      sendMessageTitle: String,
      sendMessagePath: String,
      sendMessageImg: String,
      showMessageCard: Boolean
    },
    methods: {
      handleTap () {
        if (this.disabled) return false
        this.$emit('click')
      }
    }
  }
</script>

<style lang="less">
  @import './index.less';
</style>
