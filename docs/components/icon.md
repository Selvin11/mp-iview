# Icon

> 图标

## 引入

```js
import iIcon from 'mp-lui/packages/icon'

export default {
  components: {
    iIcon
  }
}
```

## 示例

```html
<i-icon type="activity" size="28" color="#80848f" />
```

## Props

| 参数   |    说明    |  类型  | 默认值 |
| ------ | :--------: | :----: | :----: |
| iClass | 自定义类名 | string |   -    |
| type   |    类型    | string |   -    |
| size   |  字体大小  | number |   14   |
| color  |    颜色    | string |   -    |

## Events

| 事件名称 |    说明    | 回调参数 |
| :------- | :--------: | :------: |
| click    | 点击时触发 |    -     |