# Page

> 分页

## 引入

```js
import iPage from 'mp-lui/packages/page'

export default {
  components: {
    iPage
  },
  data () {
    return {
      current: 1,
      total: 5
    }
  },
  methods: {
    handleChange (type) {
      if (type === 'next') {
        this.current++
      } else if (type === 'prev') {
        this.current--
      }
    }
  }
}
```

## 示例

```html
<i-page :current="current" :total="total" mode="number" @change="handleChange"></i-page>
```

## Props

| 参数    |    说明    |  类型   |         可选值          | 默认值 |
| ------- | :--------: | :-----: | :---------------------: | :----: |
| iClass  | 自定义类名 | string  |            -            |   -    |
| mode    |  分页模式  | string  | button，number，pointer |   -    |
| current |   当前页   | number  |            -            |   1    |
| total   |   总页数   | number  |            -            |   0    |
| simple  |  隐藏数值  | boolean |            -            | false  |

## Events

| 事件名称 |      说明      | 回调参数 |
| :------- | :------------: | :------: |
| change   | 页数变化时触发 |  event   |

## Slot

| 名称 |  说明  |
| ---- | :----: |
| prev | 上一页 |
| next | 下一页 |

