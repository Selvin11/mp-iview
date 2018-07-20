# Drawer

> 抽屉

## 引入

``` js
import iDrawer from 'mp-lui/packages/drawer'

export default {
  components: {
    iDrawer
  },
  data () {
    return {
      showLeft1: false,
      showLeft2: false
    }
  },
  methods: {
    toggleLeft1 () {
      this.showLeft1 = !this.showLeft1
    },
    toggleLeft2 () {
      this.showLeft2 = !this.showLeft2
    }
  }
}
```

## 示例

``` html
<i-drawer mode="left" :visible="showLeft1" @close="toggleLeft1">
  <div class="demo-container">
    单击遮罩层关闭
  </div>
</i-drawer>
<i-drawer mode="left" :visible="showLeft2" :mask-closable="false">
  <div class="demo-container">
    禁止单击遮罩关闭
    <i-button @click="toggleLeft2" type="primary">关闭</i-button>
  </div>
</i-drawer>
```

## Props

| 参数           | 说明                           |   类型   | 默认值 |
| ------------- |:-----------------------------:| :-------:| :-----------: |
| iClass | 自定义类名 | string | - |
| visible | 控制显示隐藏 | boolean | false |
| mask | 控制遮罩 |  boolean  | true |
| maskClosable | 控制点击遮罩关闭抽屉 | boolean | true |
| mode | 出现的位置 | string | left |

## Events

| 事件名称 |    说明    | 回调参数 |
| :------- | :--------: | :------: |
| close    | 隐藏时触发 |    -     |

## Slot

| 名称 |   说明   |
| ---- | :------: |
| -    | 主体内容 |

