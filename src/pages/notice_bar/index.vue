<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Notice-Bar</div>
      <div class="page__desc">通知栏</div>
    </div>
    <div class="page__bd">
      <i-panel title="通告栏">
        <i-notice-bar>
          2018年世界杯,将于6月14日至7月15日举行
        </i-notice-bar>
      </i-panel>
      <i-panel title="icon 通告栏">
        <i-notice-bar icon="systemprompt">
          2018年世界杯,将于6月14日至7月15日举行
        </i-notice-bar>
      </i-panel>
      <i-panel title="关闭 通告栏">
        <i-notice-bar icon="systemprompt" closable>
          2018年世界杯,将于6月14日至7月15日举行
        </i-notice-bar>
      </i-panel>
      <i-panel title="滚动 通告栏">
        <i-notice-bar icon="systemprompt" :loop="true">
          2018年世界杯,将于6月14日至7月15日举行;2018年世界杯,将于6月14日至7月15日举行;
        </i-notice-bar>
      </i-panel>
    </div>
  </div>
</template>

<script>
import iNoticeBar from '../../../packages/notice-bar'
import iPanel from '../../../packages/panel'

export default {
  components: {
    iNoticeBar,
    iPanel
  },
  methods: {
  }
}
</script>

