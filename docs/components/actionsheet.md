# Actionsheet

> 弹出式菜单

## 引入

``` js
import iActionsheet from 'mp-lui/packages/actionsheet'

export default {
  components: {
    iActionsheet
  },
  data () {
    return {
      visible: false,
      actions: [
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
      ]
    }
  },
  methods: {
    handleCancel () {
      this.visible = false
    },
    handleClickItem (detail) {
      const index = detail.index + 1
      console.log(index)
    }
  }
}
```

## 示例

``` html
<i-actionsheet 
  :visible="visible"
  :actions="actions"
  show-cancel 
  @cancel="handleCancel" 
  @click="handleClickItem" 
/>
```

## Props

| 参数           | 说明                           |   类型   |   默认值 |
| ------------- |:-----------------------------:| :-------:|:-------:|
| iClass | 菜单外层自定义类名 | string | - |
| iClassMask | 菜单遮罩层自定义类名            | string   | - |
| iClassHeader | 菜单头部自定义类名            |  string   | - |
| visible | 菜单显示隐藏 | boolean | false |
| maskClosable | 点击遮罩层关闭菜单 | boolean | true |
| showCancel | 显示取消区域 | boolean | false |
| cancelText | 取消区域的文字 | string | 取消 |
| actions | 菜单项 | array | [] |


## Events

| 事件名称 |        说明        |   回调参数   |
| :------- | :----------------: | :----------: |
| click    |  点击菜单项时触发  | 此菜单项的值 |
| cancel   | 点击取消区域时触发 |      -       |

## Slot

| 名称   |      说明      |
| ------ | :------------: |
| header | 菜单项顶部内容 |

