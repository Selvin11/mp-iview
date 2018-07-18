# Card

> 卡片

## 引入

``` js
import iCard from 'mp-lui/packages/card'

export default {
  components: {
    iCard
  }
}
```

## 示例

``` html
<i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <div slot="content">内容不错</div>
    <div slot="footer">尾部内容</div>
</i-card>
```

## Props

| 参数           | 说明                           |   类型   | 默认值 |
| ------------- |:-----------------------------:| :-------:| :-----------: |
| iClass | 自定义类名 | string | - |
| full | 卡片宽度自适应 | boolean | false |
| thumb | 卡片头像路径 |  string  | - |
| title | 标题 | string | - |
| extra | 标题右侧的额外内容 | string | - |

## Slot

| 名称    |   说明   |
| ------- | :------: |
| content | 主体内容 |
| footer  | 尾部内容 |

