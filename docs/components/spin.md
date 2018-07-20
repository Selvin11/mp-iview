# Spin

> 加载

## 引入

```js
import iSpin from 'mp-lui/packages/progress'

export default {
  components: {
    iSpin
  }
}
```

## 示例

```html
<i-spin size="large"></i-spin>
<i-spin fix></i-spin>
```

## Props

| 参数       |    说明    |  类型   |        可选值         | 默认值  |
| ---------- | :--------: | :-----: | :-------------------: | :-----: |
| iClass     | 自定义类名 | string  |           -           |    -    |
| size       |    大小    | string  | small，default，large | default |
| fix        |    居中    | boolean |           -           |  false  |
| fullscreen |    全屏    | boolean |           -           |  false  |
| custom     | 自定义内容 | boolean |           -           |  false  |

## Slots

| 名称 |   说明   |
| ---- | :------: |
| -    | 主体内容 |