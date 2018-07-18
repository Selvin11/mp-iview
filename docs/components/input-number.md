# Input-Number

> 加减输入框

## 引入

```js
import iInputNumber from 'mp-lui/packages/input-number'

export default {
  components: {
    iInputNumber
  },
  data () {
    return {
      value1: 1,
      value2: 0.1
    }
  },
  methods: {
    handleChange1 (detail) {
      this.value1 = detail.value
    },

    handleChange2 (detail) {
      this.value2 = detail.value
    }
  }
}
```

## 示例

```html
<i-input-number :value="value1" :min="0" :max="100" @change="handleChange1" />
<i-input-number :value="value2" :min="0" :max="100" :step="0.2" @change="handleChange2" />
```

## Props

| 参数          |                             说明                             |  类型   |                   可选值                    |   默认值   |
| ------------- | :----------------------------------------------------------: | :-----: | :-----------------------------------------: | :--------: |
| iClass |                           自定义类名                           | string  |                      -                      |     -      |
| size |                         输入框大小                         | string  |                      small，default，large                      |     -     |
| value |                           输入框内的值                           | number  |                      -                      |     1  |
| min |                      最小值                      | number |                      -                      |   -Infinity   |
| max |                         最大值                         | number |                      -                      | Infinity |
| step | 变化量 | number |                      -                      |   1    |

## Events

| 事件名称 |         说明         | 回调参数 |
| :------- | :------------------: | :------: |
| change   | 输入框内容变化时触发 |  event   |

