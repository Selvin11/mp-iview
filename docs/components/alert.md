# Alert

> 弹框

## 引入

``` js
import iAlert from 'mp-lui/packages/alert'

export default {
  components: {
    iAlert
  }
}
```

## 示例

``` html
<i-alert show-icon desc>
    An info prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
```

## Props

| 参数           | 说明                           |   类型   | 可选值 | 默认值 |
| ------------- |:-----------------------------:| :-------:|:-------:| :-----------: |
| iClass | 弹框外层自定义类名 | string | - | - |
| type | 弹框icon的类型      | string   | info, success, warning, error | info |
| closable | 弹框关闭区域显示   |  boolean  | - | false |
| showIcon | 弹框icon的显示 | boolean | - | false |
| desc | 弹框描述内容的显示 | boolean | - | false |


## Events

| 事件名称 |          说明          | 回调参数 |
| :------- | :--------------------: | :------: |
| close    | 点击弹框关闭区域时触发 |    -     |



## Slot

| 名称 |     说明     |
| ---- | :----------: |
| -    | 弹框主体内容 |
| desc | 弹框描述内容 |

