# Agree

> 同意复选框

## 引入

``` js
import MpAgree from 'mp-weui/packages/agree'

export default {
  components: {
    MpAgree
  }
}
````

## 示例

``` html
<mp-agree
  url-text="《相关条款》"
  v-model="isAgree"
  url="/abc"
/>
```

## Props


| 参数           | 说明            |   类型   |   默认值 |
| ------------- |:---------------:| --------:|--------:|
| label         | 说明文字         | string   |阅读并同意|
| url           | 显示链接         | string   |        |
| urlText       | 显示链接文本      |  string  |        |
| value         | 当前值           |  boolean  |        |

