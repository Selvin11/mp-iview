<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Tabbar</div>
      <div class="page__desc">底部导航，建议采用小程序原生的tabbar，通过设置app.json来实现。详情请看小程序文档。</div>
    </div>
    <div class="page__bd">
      <i-panel title="基本用法"></i-panel>
      <i-tabbar :current="current" @change="handleChange">
        <i-tabbar-item name="homepage" icon="homepage" currentIcon="homepage_fill" title="Home" />
        <i-tabbar-item name="group" icon="group" currentIcon="group_fill" title="Friends" />
        <i-tabbar-item name="remind" icon="remind" currentIcon="remind_fill" count="3" title="Notice" />
        <i-tabbar-item name="mine" icon="mine" currentIcon="mine_fill" dot title="My" />
      </i-tabbar>
    </div>
  </div>
</template>


<script>
import iPanel from '../../../packages/panel'
import iTabbar from '../../../packages/tabbar'
import iTabbarItem from '../../../packages/tabbar-item'

export default {
  data () {
    return {
      current: 'homepage'
    }
  },
  components: {
    iPanel,
    iTabbar,
    iTabbarItem
  },
  methods: {
    handleChange (name) {
      console.log('name', name)
    }
  }
}
</script>

