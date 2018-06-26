<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Spin</div>
      <div class="page__desc">加载中</div>
    </div>
    <div class="page__bd">
      <i-panel title="三种尺寸"></i-panel>

      <i-grid-group>
        <i-grid iClass="item">
          <i-spin size="small"></i-spin>
        </i-grid>
        <i-grid iClass="item">
          <i-spin></i-spin>
        </i-grid>
        <i-grid iClass="item">
          <i-spin size="large"></i-spin>
        </i-grid>
      </i-grid-group>

      <i-panel title="居中固定"></i-panel>

      <view class="container">
        <i-spin fix></i-spin>
      </view>

      <i-panel title="自定义内容"></i-panel>

      <i-grid-group>
        <i-grid iClass="item">
          <i-spin custom>加载中...</i-spin>
        </i-grid>
        <i-grid iClass="item">
          <i-spin custom>
            <i-icon type="refresh" size="20" iClass="icon-load"></i-icon>
            <view>Loading</view>
          </i-spin>
        </i-grid>
        <i-grid iClass="item">
          <i-spin custom>
            <view class="loading"></view>
          </i-spin>
        </i-grid>
      </i-grid-group>
    </div>
  </div>
</template>

<script>
import iPanel from '../../../packages/panel'
import iGridGroup from '../../../packages/grid-group'
import iGrid from '../../../packages/grid'
import iIcon from '../../../packages/icon'
import iSpin from '../../../packages/spin'

export default {
  data () {
    return {
      spinShow: true
    }
  },
  components: {
    iPanel,
    iGridGroup,
    iGrid,
    iIcon,
    iSpin
  },
  methods: {
    handleFruitChange (val) {
      console.log(val)
    },
    handleClick () {
      this.position = this.position.indexOf('left') !== -1 ? 'right' : 'left'
    }
  }
}
</script>

<style lang="less">
.item{
    height: 100px;
    text-align: center;
}
.container{
    display: block;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    border: 1px solid #eee;
}

@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.icon-load{
    animation: ani-demo-spin 1s linear infinite;
}

.loading{
    display: inline-block;
    margin-right: 12px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid #2d8cf0;
    border-color: #2d8cf0 #2d8cf0 #2d8cf0 transparent;
    animation: loading-spin 0.6s linear;
    animation-iteration-count: infinite;
}

@keyframes loading-spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spin-article{
    width: 100%;
    height: 200px;
    padding: 10px;
    position: relative;
    border: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
}
.title{
    font-size: 22px;
}
.name{
    color: #999;
    font-style: normal;
    font-size: 14px;
}
.switch{
    margin: 10px;
}
</style>
