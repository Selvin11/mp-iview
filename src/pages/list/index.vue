<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">List</div>
      <div class="page__desc">列表</div>
    </div>
    <div class="page__bd">
      <!-- panel 无标题 -->
      <div class="i-panel">
        <div class="i-panel-content">
          <i-cell title="单行列表"></i-cell>
        </div>
      </div>
      <!-- i-panel-title-hide-top  i-panel-without-border-->
      <div class="i-panel">
        <div class="i-panel-title">panel 有标题</div>
        <div class="i-panel-content">
          <i-cell title="单行列表"></i-cell>
        </div>
      </div>

      <i-panel iClass="cell-panel-demo">
        <i-cell title="单行列表" is-link value="详细信息"></i-cell>
      </i-panel>

      <i-panel iClass="cell-panel-demo">
        <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
      </i-panel>

      <i-panel iClass="cell-panel-demo" title="带 icon 的 Cell">
        <i-cell title="单行列表" value="详细信息" icon="like_fill"></i-cell>
      </i-panel>

      <i-panel iClass="cell-panel-demo" title="带箭头的 cell">
        <i-cell title="只显示箭头" is-link></i-cell>
      </i-panel>

      <i-panel iClass="cell-panel-demo">
        <i-cell title="跳转到首页" is-link url="/pages/index/main"></i-cell>
      </i-panel>

      <i-panel iClass="cell-panel-demo" title="cell 组">
        <i-cell-group>
            <i-cell title="只显示箭头" is-link></i-cell>
            <i-cell title="跳转到首页" is-link url="/pages/index/main"></i-cell>
            <i-cell title="只有 footer 点击有效" is-link url="/pages/index/main" :onlyTapFooter="true"></i-cell>
            <i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
            <i-cell title="表单">
                <input type="digit" placeholder="带小数点的数字键盘"/>
            </i-cell>
        </i-cell-group>
    </i-panel>
    </div>
  </div>
</template>

<script>
import iCellGroup from '../../../packages/cell-group'
import iCell from '../../../packages/cell'
import iPanel from '../../../packages/panel'

export default {
  components: {
    iCell,
    iCellGroup,
    iPanel
  }
}
</script>


