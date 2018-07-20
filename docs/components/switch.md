# Switch

> 开关

## 引入

```js
import iSwitch from 'mp-lui/packages/switch'

export default {
  components: {
    iSwitch
  },
  data () {
    return {
      switch1: false
    }
  },
  methods: {
    onChange (value) {
      this.switch1 = value
    }
  }
}
```

## 示例

```html
<i-switch :value="switch1" @change="onChange"></i-switch>
<i-switch :value="switch1" size="large" @change="onChange">
  <div slot="open">开启</div>
  <div slot="close">关闭</div>
</i-switch>
```

## Props

| 参数     |    说明    |  类型   |        可选值         | 默认值  |
| -------- | :--------: | :-----: | :-------------------: | :-----: |
| iClass   | 自定义类名 | string  |           -           |    -    |
| value    |  开关的值  | boolean |           -           |  false  |
| size     |    大小    | string  | large，small，default | default |
| disabled |    禁用    | boolean |           -           |  false  |
| name     |    名称    | string  |           -           |    -    |

## Events

| 事件名称 |        说明        | 回调参数 |
| :------- | :----------------: | :------: |
| change   | 开关状态变化时触发 |  event   |

## Slot

| 名称  |   说明   |
| ----- | :------: |
| open  | 开的内容 |
| close | 关的内容 |

