<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Card</div>
      <div class="page__desc">卡片</div>
    </div>

    <div class="page__bd">
      <div style="margin: 16px">默认</div>
      <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
        <div slot="content">内容不错</div>
        <div slot="footer">尾部内容</div>
      </i-card>
      <div style="margin: 16px">通栏</div>
      <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
        <div slot="content">内容不错</div>
        <div slot="footer">尾部内容</div>
      </i-card>
    </div>
  </div>
</template>

<script>
import iCard from '../../../packages/card'

export default {
  components: {
    iCard
  }
}
</script>