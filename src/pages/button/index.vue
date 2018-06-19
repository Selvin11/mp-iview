<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Button</div>
      <div class="page__desc">按钮，采用小程序原生的按钮，加入一些间距的样式。</div>
    </div>

    <i-button iClass="red" @click="handleClick">默认按钮</i-button>
    <i-button @click="handleClick" type="error" long="true">联通两边按钮</i-button>
    <i-button @click="handleClick" type="primary">Primary</i-button>
    <i-button @click="handleClick" type="ghost">Ghost</i-button>
    <i-button @click="handleClick" type="info">Info</i-button>
    <i-button @click="handleClick" type="success">Success</i-button>
    <i-button @click="handleClick" type="warning">Warning</i-button>
    <i-button @click="handleClick" type="error">Error</i-button>


    <i-button @click="handleClick" type="primary" size="large">大尺寸</i-button>
    <i-button @click="handleClick" type="primary" size="default">默认尺寸</i-button>
    <i-button @click="handleClick" type="primary" size="small">小尺寸</i-button>


    <i-button @click="handleClick" type="success" shape="circle" size="large">大尺寸</i-button>
    <i-button @click="handleClick" type="success" shape="circle">默认尺寸</i-button>
    <i-button @click="handleClick" type="success" shape="circle" size="small">小尺寸</i-button>

    <i-button @click="handleClick" type="primary" loading="true">加载中按钮</i-button>

    <i-button @click="handleClick" type="primary" disabled>禁用按钮</i-button>
  </div>
</template>

<script>
import iButton from '../../../packages/button'
export default {
  components: {
    iButton
  },
  methods: {
    handleClick () {
      console.log('i-button')
    }
  }
}
</script>

<style lang="less">
.button-sp-area{
    margin: 0 auto;
    padding-top: 15px;
    width: 60%;
}
.mini-btn{
    margin-right: 5px;
}
</style>

