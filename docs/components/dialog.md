# Dialog

> 对话框

## 引入

```js
import iDialog from 'mp-lui/packages/dialog'

export default {
  components: {
    iDialog
  },
  data () {
    return {
      visible2: false,
      visible3: false,
      actions3: [
        {
          name: '现金支付',
          color: '#2d8cf0'
        },
        {
          name: '微信支付',
          color: '#19be6b'
        },
        {
          name: '取消'
        }
      ],
    }
  },
  methods: {
    handleClose2 () {
      this.visible2 = false
    },

    handleClick3 (index) {
      if (index === 0) {
        console.log('点击了现金支付')
      } else if (index === 1) {
        console.log('点击了微信支付')
      }
      this.visible3 = false
    },
  }
}
```

## 示例

```html
<i-dialog :visible="visible2" @ok="handleClose2" @cancel="handleClose2">
  <div>这是一个无标题的对话框</div>
</i-dialog>

<i-dialog title="支付" :visible="visible3" :actions="actions3" @click="handleClick3">
  <div>请选择支付方式</div>
</i-dialog>
```

## Props

| 参数       |                         说明                         |  类型   |        可选值         |   默认值   |
| ---------- | :--------------------------------------------------: | :-----: | :-------------------: | :--------: |
| visible    |                      对话框显示                      | boolean |           -           |   false    |
| title      |                      对话框标题                      | string  |           -           |     -      |
| actions    | 对话框中的按钮组，有此值时，不显示 ok 和 cancel 按钮 |  array  |           -           |     -      |
| actionMode |                    按钮组排列方式                    | string  | horizontal ，vertical | horizontal |
| showOk     |                       确定显示                       | boolean |           -           |    true    |
| showCancel |                       取消显示                       | boolean |           -           |    true    |
| okText     |                       确定文字                       | string  |           -           |    确定    |
| cancelText |                       取消文字                       | string  |           -           |    取消    |

## Events

| 事件名称 |          说明          | 回调参数 |
| :------- | :--------------------: | :------: |
| click    | 点击每一个按钮项时触发 |    -     |
| ok       |     点击确定时触发     |    -     |
| cancel   |     点击取消时触发     |    -     |

