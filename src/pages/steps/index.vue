<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Spin</div>
      <div class="page__desc">加载中</div>
    </div>
    <div class="page__bd">
      <div class="i-steps-demo">
        <view class="one-tag">基本用法</view>
        <i-steps>
          <i-step status="finish" title="已完成" content="这里是该步骤的描述信息" />
          <i-step status="process" title="进行中" content="这里是该步骤的描述信息" />
          <i-step title="错误" content="这里是该步骤的描述信息" />
        </i-steps>
        <view class="one-tag">使用 icon 图标</view>
        <i-steps>
          <i-step status="finish" icon="barrage" title="已完成" content="这里是该步骤的描述信息" />
          <i-step status="process" icon="brush" title="进行中" content="这里是该步骤的描述信息" />
          <i-step icon="collection" title="错误" content="这里是该步骤的描述信息" />
        </i-steps>
        <view class="one-tag">步骤进度</view>
        <i-steps :current="current" :direction="direction">
          <i-step title="已完成" content="这里是该步骤的描述信息" />
          <i-step title="进行中" content="这里是该步骤的描述信息" />
          <i-step title="错误" content="这里是该步骤的描述信息" />
        </i-steps>
        <i-button @click="handleClick">下一步</i-button>
      </div>
    </div>
  </div>
</template>

<script>
import iButton from '../../../packages/button'
import iSteps from '../../../packages/steps'
import iStep from '../../../packages/step'

export default {
  data () {
    return {
      current: 2,
      direction: 'horizontal'
    }
  },
  components: {
    iButton,
    iSteps,
    iStep
  },
  methods: {
    handleClick () {
      this.current = this.current + 1 > 2 ? 0 : this.current + 1
      this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
    }
  }
}
</script>

<style lang="less">
.i-steps-demo{
    margin:20px;
}
.one-tag{
    font-size:14px;
    margin:30px 5px 20px 0;
}
</style>
