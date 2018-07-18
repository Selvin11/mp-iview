# Layout

> 栅格系统

## 引入

```js
import iRow from 'mp-lui/packages/row'
import iCol from 'mp-lui/packages/col'

export default {
  components: {
    iRow,
    iCol
  },
  data () {
    return {
      fruit: [{
        value: 1,
        name: '香蕉',
        checked: true
      }, {
        value: 2,
        name: '苹果'
      }, {
        value: 3,
        name: '西瓜',
        checked: true
      }, {
        value: 4,
        name: '葡萄'
      }],
      position: 'left'
    }
  }
}
```

## 示例

```html
<i-row iClass="row-class">
    <i-col span="8" iClass="col-class">col-8</i-col>
    <i-col span="8" offset="8" iClass="col-class light">col-8 | offset-8</i-col>
</i-row>
<i-row iClass="row-class">
    <i-col span="6" offset="8" iClass="col-class">col-6 | offset-8</i-col>
    <i-col span="6" offset="4" iClass="col-class light">col-6 | offset-4</i-col>
</i-row>
<i-row iClass="row-class">
    <i-col span="12" offset="8" iClass="col-class">col-12 | offset-8</i-col>
</i-row>
```

## Props

| 参数（Row） |    说明    |  类型  | 默认值 |
| ----------- | :--------: | :----: | :----: |
| iClass      | 自定义类名 | string |   -    |



| 参数（Col） |    说明    |  类型  | 默认值 |
| ----------- | :--------: | :----: | :----: |
| iClass      | 自定义类名 | string |   -    |
| span        |  栅格个数  | number |   0    |
| offset      | 栅格偏移量 | number |   0    |

