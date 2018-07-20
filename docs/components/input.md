# Input

> 输入框

## 引入

```js
import iInput from 'mp-lui/packages/input'

export default {
  components: {
    iInput
  },
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '输入框已禁用'
    }
  }
}
```

## 示例

```html
<i-input :value="value1" title="收货人" autofocus placeholder="名字" />
<i-input :value="value2" type="number" title="联系电话" placeholder="请输入手机号" />
<i-input :value="value3" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
<i-input :value="value4" title="用户信息" disabled />
```

## Props

| 参数          |                             说明                             |  类型   |                   可选值                    |   默认值   |
| ------------- | :----------------------------------------------------------: | :-----: | :-----------------------------------------: | :--------: |
| iClass |                           自定义类名                           | string  |                      -                      |     -      |
| title    |                         标题                         | string  |                      -                      |     -      |
| type    |                           类型                           | string  |                      text，textarea，password，number                      |     text  |
| disabled |                      禁用                      | boolean |                      -                      |   false   |
| placeholder |                         备注                         | string  |                      -                      |   -    |
| autofocus | 自动聚焦 | boolean |                      -                      |   false    |
| mode   |            展现形式           | string |                      normal， wrapped                      | normal |
| right |                           输入框在右侧                           | boolean | - | false |
| error     |                           错误提示                           | boolean |                      -                      |     false |
| maxlength |                      最大长度限制                      | number |                      -                      |   -    |

## Events

| 事件名称 |         说明         | 回调参数 |
| :------- | :------------------: | :------: |
| change   | 输入框内容变化时触发 |  event   |
| focus    |   输入框聚焦时触发   |  event   |
| blur     |   输入框失焦时触发   |  event   |

