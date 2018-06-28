<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Tab</div>
      <div class="page__desc">切换栏。</div>
    </div>
    <div class="page__bd">
      <i-panel title="基本用法"></i-panel>
      <i-tabs :current="current" @change="handleChange">
        <i-tab name="tab1" title="选项1" />
        <i-tab name="tab2" title="选项2" />
        <i-tab name="tab3" title="选项3" />
      </i-tabs>

      <i-panel title="自定义主题色"></i-panel>

      <i-tabs :current="current" color="#f759ab" @change="handleChange">
        <i-tab name="tab1" title="选项1"></i-tab>
        <i-tab name="tab2" title="选项2"></i-tab>
        <i-tab name="tab3" title="选项3"></i-tab>
      </i-tabs>
      
      <i-panel title="徽标"></i-panel>

      <i-tabs :current="current" @change="handleChange">
        <i-tab name="tab1" title="选项1" count="3"></i-tab>
        <i-tab name="tab2" title="选项2"></i-tab>
        <i-tab name="tab3" title="选项3" dot></i-tab>
      </i-tabs>

      <i-panel title="滚动"></i-panel>

      <i-tabs :current="current_scroll" scroll @change="handleChange">
        <i-tab name="tab1" title="选项1"></i-tab>
        <i-tab name="tab2" title="选项2"></i-tab>
        <i-tab name="tab3" title="选项3"></i-tab>
        <i-tab name="tab4" title="选项4"></i-tab>
        <i-tab name="tab5" title="选项5"></i-tab>
        <i-tab name="tab6" title="选项6"></i-tab>
        <i-tab name="tab7" title="选项7"></i-tab>
        <i-tab name="tab8" title="选项8"></i-tab>
        <i-tab name="tab9" title="选项9"></i-tab>
      </i-tabs>
    </div>
  </div>
</template>


<script>
import iPanel from '../../../packages/panel'
import iTabs from '../../../packages/tabs'
import iTab from '../../../packages/tab'

export default {
  data () {
    return {
      current: 'tab1',
      current_scroll: 'tab1'
    }
  },
  components: {
    iPanel,
    iTabs,
    iTab
  },
  methods: {
    handleChange (name) {
      console.log('name', name)
    }
  }
}
</script>

