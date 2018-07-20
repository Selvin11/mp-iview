---
home: true
# heroImage: /hero.png
actionText: 快速上手 →
actionLink: /components/button
footer: MIT Licensed | Copyright © 2018-present Selvin
---

### 快速使用

``` bash
# 安装
npm i -S mp-lui

# 在 App.vue 中全局引入 css 文件
import 'mp-lui/lib/style.css'

# 由于 mpvue component 暂不支持全局注册，暂时只能使用局部注册
import MpRadio from 'mp-lui/packages/radio'

export default {
  components: {
    MpRadio
  }
}
```