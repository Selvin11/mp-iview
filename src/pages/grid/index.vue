<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Grid</div>
      <div class="page__desc">九宫格</div>
    </div>
    <div class="page__bd">
      <div class="i-grid">
        <i-grid
          :type="item.type"
          v-for="item in grids"
          :size="24"
          :label="item.label"
          :key="item"
        />
      </div>
      <!-- 无法在i-grid-group中使用i-grid组件循环，这样无法显示 -->
      <div style="margin-top: 20px"></div>
      <i-grid-group>
        <i-grid type="activity" :size="24" label="1" />
        <i-grid type="activity" :size="24" label="2" />
        <i-grid type="activity" :size="24" label="3" />
        <i-grid type="activity" :size="24" label="4" />
      </i-grid-group>
    </div>
  </div>
</template>

<script>
import iGridGroup from '../../../packages/grid-group'
import iGrid from '../../../packages/grid'

export default {
  data () {
    return {
      grids: [{
        label: 1,
        type: 'activity'
      }, {
        label: 2,
        type: 'activity'
      }, {
        label: 3,
        type: 'activity'
      }, {
        label: 4,
        type: 'activity'
      }]
    }
  },
  components: {
    iGrid,
    iGridGroup
  }
}
</script>


