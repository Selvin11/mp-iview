# Badge

> 徽章

## 引入

``` js
import iBadge from 'mp-lui/packages/badge'

export default {
  components: {
    iBadge
  }
}
```

## 示例

``` html
<i-badge count="66" i-class-alone="demo-badge-alone" />
```

## Props

| 参数           | 说明                           |   类型   | 默认值 |
| ------------- |:-----------------------------:| :-------:| :-----------: |
| iClass | 自定义类名 | string | - |
| iClassAlone | 徽章提醒类名 | string   | - |
| count | 显示数字 |  string  | - |
| dot | 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置`count`为 0 | boolean | - |
| overflowCount | 展示封顶的数字值 | number | 99 |

## Slot

| 名称 |     说明     |
| ---- | :----------: |
| -    | 按钮主体内容 |
