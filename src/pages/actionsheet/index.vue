<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">ActionSheet</div>
      <div class="page__desc">弹出式菜单，采用小程序原生的actionsheet</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <div style="margin-top: 100px">
          <button class="i-btn i-btn-ghost i-btn-square" type="ghost" @click="handleOpen1">一般用法</button>
          <button class="i-btn i-btn-ghost i-btn-square" type="ghost" @click="handleOpen2">带有提示、异步</button>
          <i-action-sheet :visible="visible1" :actions="actions1" show-cancel @cancel="handleCancel1" @click="handleClickItem1" />
          <i-action-sheet :visible="visible2" :actions="actions2" show-cancel @cancel="handleCancel2" @click="handleClickItem2" :mask-closable="false">
            <div slot="header">
              <div style="color: #444;font-size: 16px">确定吗？</div>
              <span>删除后无法恢复哦</span>
            </div>
        </i-action-sheet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iActionSheet from '../../../packages/actionsheet'

export default {
  data () {
    return {
      visible1: false,
      visible2: false,
      actions1: [
        {
          name: '选项1'
        },
        {
          name: '选项2'
        },
        {
          name: '去分享',
          icon: 'share',
          openType: 'share'
        }
      ],
      actions2: [
        {
          name: '删除',
          color: '#ed3f14'
        }
      ]
    }
  },
  components: {
    iActionSheet
  },
  methods: {
    handleOpen1 () {
      this.visible1 = true
    },
    handleCancel1 () {
      this.visible1 = false
    },

    handleOpen2 () {
      this.visible2 = true
    },

    handleCancel2 () {
      this.visible2 = false
    },

    handleClickItem1 (detail) {
      const index = detail.index + 1
      console.log(index)
    },

    handleClickItem2 () {
      const action = [...this.actions2]
      action[0].loading = true

      this.actions2 = action

      setTimeout(() => {
        action[0].loading = false
        this.visible2 = false
        this.actions2 = action
        console.log('删除成功！')
      }, 2000)
    }
  }
}
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>
