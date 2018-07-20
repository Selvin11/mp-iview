<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Panel</div>
      <div class="page__desc">面板</div>
    </div>
    <div class="page__bd">
      <i-panel title="标题" hide-top>
        <div style="padding: 15px;">头部距离为 0 的 Panel</div>
      </i-panel>

      <i-panel title="标题">
        <div style="padding: 15px;">带有标题的 Panel</div>
      </i-panel>

      <i-panel title="标题" hide-border>
        <div style="padding: 15px;">无边框的 Panel</div>
      </i-panel>
    </div>
  </div>
</template>

<script>
import iPanel from '../../../packages/panel'

export default {
  components: {
    iPanel
  }
}
</script>

