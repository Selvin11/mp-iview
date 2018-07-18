# Checkbox

> 复选框

## 引入

```js
import iCheckbox from 'mp-lui/packages/checkbox'

export default {
  components: {
    iCheckbox
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
<i-checkbox @checkbox-change="handleFruitChange" :lists="fruit" :position="position" />
```

## Props

| 参数     |      说明      |  类型   |   可选值    |  默认值  |
| -------- | :------------: | :-----: | :---------: | :------: |
| iClass   |   自定义类名   | string  |      -      |    -     |
| color    |  选中后的颜色  | boolean |      -      | # 2d8cf0 |
| position | 选择框排列方向 | string  | left，right |   left   |
| lists    |   复选框对象   |  array  |      -      |    -     |

