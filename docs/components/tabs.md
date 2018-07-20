# Tabs

> 顶部切换栏

## 引入

```js
import iTabs from 'mp-lui/packages/tabs'
import iTab from 'mp-lui/packages/tab'

export default {
  components: {
    iTabs,
    iTab
  },
  data () {
    return {
      current: 'tab1',
      current_scroll: 'tab1'
    }
  }
}
```

## 示例

```html
<!-- 基本用法 -->
<i-tabs :current="current" @change="handleChange">
  <i-tab name="tab1" title="选项1" />
  <i-tab name="tab2" title="选项2" />
  <i-tab name="tab3" title="选项3" />
</i-tabs>

<!-- 自定义主题色 -->

<i-tabs :current="current" color="#f759ab" @change="handleChange">
  <i-tab name="tab1" title="选项1"></i-tab>
  <i-tab name="tab2" title="选项2"></i-tab>
  <i-tab name="tab3" title="选项3"></i-tab>
</i-tabs>

<!-- 徽标 -->

<i-tabs :current="current" @change="handleChange">
  <i-tab name="tab1" title="选项1" count="3"></i-tab>
  <i-tab name="tab2" title="选项2"></i-tab>
  <i-tab name="tab3" title="选项3" dot></i-tab>
</i-tabs>

<!-- 滚动 -->

<i-tabs :current="current_scroll" scroll @change="handleChange">
  <i-tab name="tab1" title="选项1"></i-tab>
  <i-tab name="tab2" title="选项2"></i-tab>
  <i-tab name="tab3" title="选项3"></i-tab>
  <i-tab name="tab4" title="选项4"></i-tab>
  <i-tab name="tab5" title="选项5"></i-tab>
  <i-tab name="tab6" title="选项6"></i-tab>
  <i-tab name="tab7" title="选项7"></i-tab>
  <i-tab name="tab8" title="选项8"></i-tab>
  <i-tab name="tab9" title="选项9"></i-tab>
</i-tabs>
```

## Props

| 参数（Tabs） |     说明     |  类型   | 可选值 | 默认值 |
| ------------ | :----------: | :-----: | :----: | :----: |
| iClass       |  自定义类名  | string  |   -    |   -    |
| current      | 当前栏的名称 | string  |   -    |   -    |
| color        | 切换栏的颜色 | string  |   -    | 2d8cf0 |
| fixed        |     固定     | boolean |   -    | false  |
| scroll       |    可滚动    | boolean |   -    | false  |

| 参数（ TabbarItem） |          说明          |  类型   | 可选值 | 默认值 |
| ------------------- | :--------------------: | :-----: | :----: | :----: |
| iClass              |       自定义类名       | string  |   -    |   -    |
| name                |        此栏名称        | string  |   -    |   -    |
| overflowCount       | 此栏的消息最大显示数字 | number  |   -    |   99   |
| title               |          标题          | string  |   -    |   -    |
| dot                 |   此栏的消息用点表示   | boolean |   -    | false  |
| count               |      此栏的消息数      | number  |   -    |   0    |

## Slot（Tabs）

| 名称 |  说明   |
| ---- | :-----: |
| -    | 装载Tab |

