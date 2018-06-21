<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Badge</div>
      <div class="page__desc">徽章</div>
    </div>

    <div class="page__bd">
      <view class="demo">
        <i-badge dot>
          <view class="demo-badge"></view>
        </i-badge>
      </view>
      <view class="demo">
        <i-badge count="3">
          <view class="demo-badge"></view>
        </i-badge>
      </view>
      <view class="demo">
        <i-badge count="123" overflow-count="100">
          <view class="demo-badge"></view>
        </i-badge>
      </view>
      <view class="demo">
        <i-badge count="66">
        </i-badge>
      </view>
      <view class="demo">
        <i-badge count="66" i-class-alone="demo-badge-alone">
        </i-badge>
      </view>
    </div>
  </div>
</template>

<script>
import iBadge from '../../../packages/badge'

export default {
  components: {
    iBadge
  }
}
</script>

<style lang="less">
.demo {
  margin: 20px;
}

.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}

.demo-badge-alone {
  background: #5cb85c!important;
}
</style>


