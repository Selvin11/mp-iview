<template>
  <div v-if="show" :class="['i-noticebar', iClass]">
    <i-icon v-if="icon" :type="icon" size="24" color="#f76a24" iClass="i-noticebar-icon"></i-icon>
    <div class="i-noticebar-content-wrap">
        <view :class="['i-noticebar-content', loop ? 'i-noticebar-content-loop' : '']" :animation="animationData">
           <slot></slot>
        </view>
    </div>
    <i-icon v-if="closable" iClass="i-noticebar-operation" type="close" size="20" color="#f76a24" @iconClick="handleClose"></i-icon>
  </div>
</template>

<script>
import iIcon from '../icon'
export default {
  name: 'iNoticeBar',
  components: {
    iIcon
  },
  props: {
    iClass: String,
    closable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: true,
      wrapWidth: 0,
      width: 0,
      duration: 0,
      animation: null,
      timer: null
    }
  },
  destroyed () {
    this.destroyTimer()
  },
  mounted () {
    if (this.loop) {
      this.initAnimation()
    }
  },
  methods: {
    initAnimation () {
      wx.createSelectorQuery().in(this).select('.i-noticebar-content-wrap').boundingClientRect((wrapRect) => {
        wx.createSelectorQuery().in(this).select('.i-noticebar-content').boundingClientRect((rect) => {
          const duration = rect.width / 40 * 1000
          const animation = wx.createAnimation({
            duration: duration,
            timingFunction: 'linear'
          })
          this.wrapWidth = wrapRect.width
          this.width = rect.width
          this.duration = duration
          this.animation = animation
          this.startAnimation()
          // this.$watch('animation', function (newVal, oldVal) {
          //   this.startAnimation()
          // })
        }).exec()
      }).exec()
    },
    startAnimation () {
      // reset
      if (this.animation.option.transition.duration !== 0) {
        this.animation.option.transition.duration = 0
        const resetAnimation = this.animation.translateX(this.wrapWidth).step()
        this.animationData = resetAnimation.export()
      }
      this.animation.option.transition.duration = this.duration
      const animationData = this.animation.translateX(-this.width).step()
      setTimeout(() => {
        this.animationData = animationData.export()
      }, 100)
      const timer = setTimeout(() => {
        this.startAnimation()
      }, this.duration)
      this.timer = timer
    },
    destroyTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    handleClose () {
      this.destroyTimer()
      this.show = false
      this.timer = null
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
