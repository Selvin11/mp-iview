# Cell

> 单元格，可用作列表信息展示

## 引入

``` js
import iCell from 'mp-lui/packages/cell'

export default {
  components: {
    iCell
  }
}
```

## 示例

带说明的列表项

``` html
<i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
```

带图标、说明的列表项

``` html
<i-cell title="单行列表" value="详细信息" icon="like_fill"></i-cell>
<i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
```

带跳转的列表项

``` html
<i-cell title="跳转到首页" is-link url="/pages/index/main"></i-cell>
```

## Props

| 参数          |                             说明                             |  类型   |                   可选值                    |   默认值   |
| ------------- | :----------------------------------------------------------: | :-----: | :-----------------------------------------: | :--------: |
| content       |                           列表内容                           | string  |                      -                      |     -      |
| icon          |                         列表icon类型                         | string  |                      -                      |     -      |
| title         |                           列表标题                           | string  |                      -                      |     -      |
| label         |                      标题下方的描述信息                      | string  |                      -                      |   square   |
| value         |                         列表右侧内容                         | string  |                      -                      |   false    |
| onlyTapFooter | 只有点击 footer 区域才触发 tab 事件，即点击cell的尾部才会出发点击跳转 | boolean |                      -                      |   false    |
| isLink        |            是否展示右侧箭头并开启尝试以 url 跳转             | boolean |                      -                      |   false    |
| linkType      |                           链接类型                           | string  | navigateTo，redirectTo，switchTab，reLaunch | navigateTo |
| url           |                           跳转路径                           | string  |                      -                      |     -      |
| isLastCell    |                      是否是最后一个列表                      | boolean |                      -                      |   false    |

## Events

| 事件名称 |      说明      | 回调参数 |
| :------- | :------------: | :------: |
| click    | 点击按钮时触发 |    -     |

