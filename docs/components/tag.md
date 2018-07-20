# Tag

> 标签

## 引入

```js
import iTag from 'mp-lui/packages/tag'

export default {
  components: {
    iTag
  }
}
```

## 示例

```html
<!-- 基本用法 -->
<i-tag>标签一</i-tag>

<!-- 设置边框配置 -->
<i-tag iClass="i-tags" name="标签一" type="border" color="red">
  标签一
</i-tag>
<i-tag iClass="i-tags" name="标签二" type="border" color="green">
  标签二
</i-tag>

<!-- 各种颜色配置 -->
<i-tag iClass="i-tags" name="单个标签">标签一</i-tag>
<i-tag iClass="i-tags" name="标签二" color="green">标签二</i-tag>
<i-tag iClass="i-tags" name="标签三" color="blue">标签三</i-tag>
<i-tag iClass="i-tags" name="标签四" color="yellow">标签四</i-tag>
```

## Props

| 参数      |     说明     |  类型   |              可选值               | 默认值  |
| --------- | :----------: | :-----: | :-------------------------------: | :-----: |
| iClass    |  自定义类名  | string  |                 -                 |    -    |
| name      |   标签名称   | string  |                 -                 |    -    |
| checkable |  是否可点击  | boolean |                 -                 |  false  |
| checked   | 标签是否选中 | boolean |                 -                 |  true   |
| color     |   标签颜色   | string  | blue, green, red, yellow, default | default |
| title     |     标题     | string  |                 -                 |    -    |
| type      |     类型     | string  |           border， dot            |   dot   |

## Events

| 事件名称 |      说明      |     回调参数     |
| :------- | :------------: | :--------------: |
| change   | 点击标签时触发 | {name,  checked} |

## Slot

| 名称 |   说明   |
| ---- | :------: |
| -    | 主体内容 |

