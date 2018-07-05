<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Page</div>
      <div class="page__desc">分页</div>
    </div>
    <i-panel title="带有文字的按钮"></i-panel>

    <i-page :current="current" :total="total" @change="handleChange">
        <div slot="prev">Prev</div>
        <div slot="next">Next</div>
    </i-page>

    <i-panel title="带有文字和图标的按钮"></i-panel>

    <i-page :current="current" :total="total" @change="handleChange" prevText="< 上一步" nextText="下一步 >">
        <div slot="prev">
            <i-icon type="return"></i-icon>
            上一步
        </div>
        <div slot="next">
            下一步
            <i-icon type="enter"></i-icon>
        </div>
    </i-page>

    <i-panel title="隐藏数字"></i-panel>

    <i-page :current="current" :total="total" simple @change="handleChange"  prevText="Prev" nextText="Next">
        <div slot="prev">Prev</div>
        <div slot="next">Next</div>
    </i-page>

    <i-panel title="只显示数字"></i-panel>

    <i-page :current="current" :total="total" mode="number" @change="handleChange"></i-page>

    <i-panel title="显示点"></i-panel>

    <i-page :current="current" :total="total" mode="pointer" @change="handleChange"></i-page>
  </div>
</template>

<script>
import iPanel from '../../../packages/panel'
import iPage from '../../../packages/page'
import iIcon from '../../../packages/icon'

export default {
  components: {
    iPanel,
    iPage,
    iIcon
  },
  data () {
    return {
      current: 1,
      total: 5
    }
  },
  methods: {
    handleChange (type) {
      if (type === 'next') {
        this.current++
      } else if (type === 'prev') {
        this.current--
      }
    }
  }
}
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>


