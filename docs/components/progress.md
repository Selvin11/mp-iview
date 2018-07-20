# Progress

> 分页

## 引入

```js
import iProgress from 'mp-lui/packages/progress'

export default {
  components: {
    iProgress
  }
}
```

## 示例

```html
<i-progress percent="100" status="success"></i-progress>
```

## Props

| 参数        |    说明    |  类型   |             可选值             | 默认值 |
| ----------- | :--------: | :-----: | :----------------------------: | :----: |
| iClass      | 自定义类名 | string  |               -                |   -    |
| percent     |  进度占比  | number  |               -                |   0    |
| status      | 进度条类型 | string  | normal，active，wrong，success | normal |
| strokeWidth | 进度条厚度 | number  |               -                |   10   |
| hideInfo    | 隐藏百分比 | boolean |               -                | false  |

