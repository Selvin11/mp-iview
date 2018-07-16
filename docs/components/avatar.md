# Avatar

> 头像

## 引入

``` js
import iAvatar from 'mp-lui/packages/avatar'

export default {
  components: {
    iAvatar
  }
}
```

## 示例

``` html
<i-avatar size="small" shape="square">梁</i-avatar>
```

## Props

| 参数           | 说明                           |   类型   | 可选值 | 默认值 |
| ------------- |:-----------------------------:| :-------:|:-------:| :-----------: |
| iClass | 外层自定义类名 | string | - | - |
| shape | 头像形状 | string   | circle，square | circle |
| size | 头像大小 |  string  | small， large，default | default |
| src | 头像图片路径 | string | - | - |

## Slot

| 名称 |     说明     |
| ---- | :----------: |
| -    | 头像内部内容 |

