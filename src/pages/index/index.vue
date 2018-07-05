<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Mp-Lui</div>
      <div class="page__desc">Mp-Lui 是基于 iview 和 weui 以及 lui UI库，并在 MpVue 上实现的小程序 UI 组件库。</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="kind-list">
        <div v-for="item in list" :key="item.id">
          <div class="kind-list__item">
            <div :class="['weui-flex', 'kind-list__item-hd', { 'kind-list__item-hd_show' : item.open}]" @click="kindToggle(item.id)">
              <div class="weui-flex__item">{{item.name}}</div>
              <img class="kind-list__img" :src="'/static/images/icon_nav_' + item.id + '.png'" />
            </div>
            <div :class="['kind-list__item-bd', {'kind-list__item-bd_show' : item.open}]">
              <div :class="['weui-cells', {'weui-cells_show' : item.open}]">
                <div v-for="(page, i) in item.pages" :key="i">
                  <a :href="'/pages/' + page.url + '/main'" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">{{page.url}}-{{page.name}}</div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page__ft">
      <img src="/static/images/icon_footer.png" style="width: 84px; height: 19px;" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          id: 'form',
          name: '表单',
          open: false,
          pages: [{
            url: 'input',
            name: '输入框'
          }, {
            url: 'input_number',
            name: '加减输入框'
          }, {
            url: 'button',
            name: '按钮'
          }, {
            url: 'checkbox',
            name: '复选'
          }, {
            url: 'radio',
            name: '单选'
          }, {
            url: 'slider',
            name: '滑块'
          }, {
            url: 'switch',
            name: '开关'
          }, {
            url: 'uploader',
            name: '上传'
          }]
        }, {
          id: 'widget',
          name: '基础组件',
          open: false,
          pages: [{
            url: 'avatar',
            name: '头像'
          }, {
            url: 'badge',
            name: '徽章'
          }, {
            url: 'layout',
            name: '栅格布局'
          }, {
            url: 'card',
            name: '卡片'
          }, {
            url: 'drawer',
            name: '抽屉'
          }, {
            url: 'notice_bar',
            name: '通知栏'
          }, {
            url: 'footer',
            name: '底部'
          }, {
            url: 'gallery',
            name: '画廊'
          }, {
            url: 'grid',
            name: '九宫格'
          }, {
            url: 'icons',
            name: '图标'
          }, {
            url: 'list',
            name: '列表'
          }, {
            url: 'spin',
            name: '加载'
          }, {
            url: 'tag',
            name: '标签'
          }, {
            url: 'panel',
            name: '面板'
          }, {
            url: 'progress',
            name: '进度条'
          }]
        }, {
          id: 'feedback',
          name: '操作反馈',
          open: false,
          pages: [{
            url: 'actionsheet',
            name: '弹出式菜单'
          }, {
            url: 'alert',
            name: '弹框'
          }, {
            url: 'steps',
            name: '步骤条'
          }, {
            url: 'dialog',
            name: '对话框'
          }, {
            url: 'msg',
            name: '提示页'
          }, {
            url: 'picker',
            name: '选择器'
          }, {
            url: 'toast',
            name: '弹出式提示'
          }]
        }, {
          id: 'nav',
          name: '导航相关',
          open: false,
          pages: [{
            url: 'navbar',
            name: '顶部导航'
          }, {
            url: 'tabbar',
            name: '底部导航'
          }, {
            url: 'tabs',
            name: '切换栏'
          }, {
            url: 'page',
            name: '分页'
          }]
        }, {
          id: 'search',
          name: '搜索相关',
          open: false,
          pages: [{
            url: 'searchbar',
            name: '搜索框'
          }]
        }]
      }
    },
    methods: {
      kindToggle (id) {
        const {
          list
        } = this

        for (let i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            list[i].open = !list[i].open
          } else {
            list[i].open = false
          }
        }

        this.list = list
      }
    }
  }
</script>

<style lang="less">
  .weui-flex {
    align-items: center;
  }

  .weui-cells {
    margin-top: 0;
    opacity: 0;
    transform: translateY(-50%);
    transition: 0.3s;
    &:before,
    &:after {
      display: none;
    }
    &_show {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .weui-cell {
    &:before {
      right: 15px;
    }
  }

  .kind-list__item {
    margin: 10px 0;
    background-color: #ffffff;
    border-radius: 2px;
    overflow: hidden;
    &:first-child {
      margin-top: 0;
    }
  }

  .kind-list__img {
    width: 30px;
    height: 30px;
  }

  .kind-list__item-hd {
    padding: 20px;
    transition: opacity 0.3s;
    &_show {
      opacity: 0.4;
    }
  }

  .kind-list__item-bd {
    height: 0;
    overflow: hidden;
    &_show {
      height: auto;
    }
  }

</style>
