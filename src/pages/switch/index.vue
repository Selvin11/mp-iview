<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Switch</div>
      <div class="page__desc">开关</div>
    </div>
    <div class="page__bd">
      <i-cell-group>
        <i-cell title="基本用法">
          <div slot="footer">
            <i-switch :value="switch1" @change="onChange"></i-switch>
          </div>
        </i-cell>
        <i-cell title="自定义内容">
          <div slot="footer">
            <i-switch :value="switch1" size="large" @change="onChange">
              <div slot="open">开启</div>
              <div slot="close">关闭</div>
            </i-switch>
          </div>
        </i-cell>
        <i-cell title="图标">
          <div slot="footer">
            <i-switch :value="switch1" @change="onChange" slot="footer">
              <i-icon type="right" slot="open"></i-icon>
              <i-icon type="close" slot="close"></i-icon>
            </i-switch>
          </div>
        </i-cell>
        <i-cell title="禁止切换">
          <div slot="footer">
            <i-switch :value="switch1" disabled slot="footer"></i-switch>
          </div>
        </i-cell>
      </i-cell-group>
    </div>
  </div>
</template>

<script>
import iCellGroup from '../../../packages/cell-group'
import iCell from '../../../packages/cell'
import iIcon from '../../../packages/icon'
import iSwitch from '../../../packages/switch'

export default {
  data () {
    return {
      switch1: false
    }
  },
  components: {
    iSwitch,
    iCellGroup,
    iCell,
    iIcon
  },
  methods: {
    onChange (value) {
      this.switch1 = value
    }
  }
}
</script>
