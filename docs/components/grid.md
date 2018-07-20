# Grid

> 九宫格

## 引入

```js
import iGridGroup from 'mp-lui/packages/grid-group'
import iGrid from 'mp-lui/packages/grid'

export default {
  components: {
    iGrid,
    iGridGroup
  },
  data () {
    return {
      grids: [{
        label: 1,
        type: 'activity'
      }, {
        label: 2,
        type: 'activity'
      }, {
        label: 3,
        type: 'activity'
      }, {
        label: 4,
        type: 'activity'
      }]
    }
  }
}
```

## 示例

```html
<i-grid-group>
  <i-grid type="activity" :size="24" label="1" />
  <i-grid type="activity" :size="24" label="2" />
  <i-grid type="activity" :size="24" label="3" />
  <i-grid type="activity" :size="24" label="4" />
</i-grid-group>
```

## Props

| 参数（GridGroup） |    说明    |  类型  | 默认值 |
| ----------------- | :--------: | :----: | :----: |
| iClass            | 自定义类名 | string |   -    |



| 参数（Grid） |    说明    |  类型  | 默认值 |
| ------------ | :--------: | :----: | :----: |
| iClass       | 自定义类名 | string |   -    |
| size         | icon的大小 | number |   -    |
| color        | icon的颜色 | string |   -    |
| type         | icon的类型 | string |   -    |
| label        |  标题文字  | string |   -    |

