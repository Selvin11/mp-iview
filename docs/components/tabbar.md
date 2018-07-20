# Tabbar

> 底部切换栏

## 引入

```js
import iTabbar from 'mp-lui/packages/tabbar'
import iTabbar from 'mp-lui/packages/tabbar-item'

export default {
  components: {
    iTabbar,
    iTabbarItem
  },
  data () {
    return {
      current: 'homepage'
    }
  }
}
```

## 示例

```html
<i-tabbar :current="current" @change="handleChange">
  <i-tabbar-item name="homepage" icon="homepage" currentIcon="homepage_fill" title="Home" />
  <i-tabbar-item name="group" icon="group" currentIcon="group_fill" title="Friends" />
  <i-tabbar-item name="remind" icon="remind" currentIcon="remind_fill" count="3" title="Notice" />
  <i-tabbar-item name="mine" icon="mine" currentIcon="mine_fill" dot title="My" />
</i-tabbar>
```

## Props

| 参数（Tabbar） |    说明    |  类型  |        可选值         |   默认值   |
| ------------- | :--------: | :----: | :-------------------: | :--------: |
| iClass        | 自定义类名 | string |           -           |     -      |
| current |    当前栏的名称    | string | - | - |
| color |  切换栏的颜色  | string |           -           |     2d8cf0     |
| fixed | 固定 | boolean | - | false |

| 参数（ TabbarItem） |    说明    |  类型  |            可选值            | 默认值 |
| ------------ | :--------: | :----: | :--------------------------: | :----: |
| iClass       | 自定义类名 | string |              -               |   -    |
| icon  |    默认图标    | string | - |   -    |
| currentIcon |    当前图标    | string |              -               |   -    |
| name |    此栏名称    | string |              -               |   -    |
| overflowCount |  此栏的消息最大显示数字  | number |              -               |   99   |
| title | 标题 | string | - | - |
| dot | 此栏的消息用点表示 | boolean | - | false |
| count | 此栏的消息数 | number | - | 0 |

## Slot（Tabbar）

| 名称 |      说明      |
| ---- | :------------: |
| -    | 装载TabbarItem |

