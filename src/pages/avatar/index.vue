<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Avatar</div>
      <div class="page__desc">头像</div>
    </div>
    <i-panel title="圆形"></i-panel>
    <i-avatar size="small">梁</i-avatar>

    <i-panel title="方形"></i-panel>
    <i-avatar size="small" shape="square">梁</i-avatar>

    <i-panel title="图片"></i-panel>
    <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small"></i-avatar>
  </div>
</template>

<script>
import iPanel from '../../../packages/panel'
import iAvatar from '../../../packages/avatar'

export default {
  components: {
    iPanel,
    iAvatar
  }
}
</script>


