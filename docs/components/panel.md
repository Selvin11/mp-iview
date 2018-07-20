# Panel

> 面板

## 引入

```js
import iPanel from 'mp-lui/packages/panel'

export default {
  components: {
    iPanel
  }
}
```

## 示例

```html
<i-panel title="标题" hide-top>
  <div style="padding: 15px;">头部距离为 0 的 Panel</div>
</i-panel>

<i-panel title="标题">
  <div style="padding: 15px;">带有标题的 Panel</div>
</i-panel>

<i-panel title="标题" hide-border>
  <div style="padding: 15px;">无边框的 Panel</div>
</i-panel>
```

## Props

| 参数       |     说明     |  类型   | 默认值 |
| ---------- | :----------: | :-----: | :----: |
| iClass     |  自定义类名  | string  |   -    |
| title      |     标题     | string  |   -    |
| hideTop    | 隐藏顶部距离 | boolean | false  |
| hideBorder |   隐藏边框   | boolean | false  |

## Slots

| 名称 |     说明     |
| ---- | :----------: |
| -    | 主体内容 |
