# Button

> 按钮

## 引入

``` js
import iButton from 'mp-lui/packages/button'

export default {
  components: {
    iButton
  },
  methods: {
    handleClick () {
      console.log('i-button')
    }
  }
}
```

## 示例

``` html
<i-button @click="handleClick" type="primary" size="large">大尺寸</i-button>
```

## Props

| 参数           | 说明                           |   类型   | 可选值 | 默认值 |
| ------------- |:-----------------------------:| :-------:|:-------:| :-----------: |
| iClass | 自定义类名 | string | - | - |
| type | 类型  | string   | default, primary, ghost, info, success, warning, error | - |
| size | 大小 |  string  | default, large, small | - |
| shape | 形状 | string | circle, square | square |
| disabled | 按钮禁止 | boolean | - | false |
| 其它 | 小程序原生属性 |  |  |  |

## Events

| 事件名称 |      说明      | 回调参数 |
| :------- | :------------: | :------: |
| click    | 点击按钮时触发 |    -     |

## Slot

| 名称 |     说明     |
| ---- | :----------: |
| -    | 按钮主体内容 |

