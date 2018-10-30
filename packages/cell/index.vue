<template>
  <div 
    @click="handleTap" 
    :class="['i-cell', {'i-cell-last' : isLastCell }, {'i-cell-access': isLink }, iClass]"
  >
    <div class="i-cell-icon">
      <div
        v-if="icon"
        class="i-icon" 
        :class="['i-icon-' + icon]"
      >
      </div>
    </div>
    <div class="i-cell-bd">
        <div v-if="title" class="i-cell-text">{{ title }}</div>
        <div v-if="label" class="i-cell-desc">{{ label }}</div>
        <span v-text="content" />
    </div>
    <div @click="navigateTo" class="i-cell-ft">
      <div v-if="value">{{ value }}</div>
      <div v-else class="i-cell-ft-slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iCell',
  props: {
    iClass: String,
    content: String,
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 只有点击 footer 区域才触发 tab 事件，即点击cell的尾部才会出发点击跳转
    onlyTapFooter: {
      type: Boolean
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: Boolean,
      default: ''
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      default: 'navigateTo'
    },
    url: {
      type: String,
      default: ''
    },
    isLastCell: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    warn (msg, getValue) {
      console.warn(msg)
      console.log('接受到的值为：', getValue)
    },
    navigateTo () {
      const { url } = this
      const type = typeof this.isLink

      this.$emit('click', {})

      if (!this.isLink || !url || url === 'true' || url === 'false') return

      if (type !== 'boolean' && type !== 'string') {
        this.warn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink)
        return
      }

      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.linkType) === -1) {
        this.warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.linkType)
        return
      }
      wx[this.linkType].call(wx, {url})
    },
    handleTap () {
      if (!this.onlyTapFooter) {
        this.navigateTo()
      }
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
