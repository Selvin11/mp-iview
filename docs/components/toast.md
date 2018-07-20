# Toast

> 顶部信息提示

## 引入

```js
import iToast from 'mp-lui/packages/toast'
import iButton from 'mp-lui/packages/button'
import {$Toast} from 'mp-lui/packages/base/index'

export default {
  components: {
    iToast,
    iButton
  },
  methods: {
    handleText () {
      $Toast(this, {
        content: '这是文本提示'
      })
    },
    handleSuccess () {
      $Toast(this, {
        content: '成功的提示',
        type: 'success'
      })
    },
    handleWarning () {
      $Toast(this, {
        content: '警告的提示',
        type: 'warning'
      })
    },
    handleError () {
      $Toast(this, {
        content: '错误的提示',
        type: 'error'
      })
    },
    handleLoading () {
      $Toast(this, {
        content: '加载中',
        type: 'loading'
      })
    },
    handleIcon () {
      $Toast(this, {
        content: '使用内置的图标',
        icon: 'praise'
      })
    },
    handleImage () {
      $Toast(this, {
        content: '使用自定义图片',
        image: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
      })
    },
    handleMask () {
      $Toast(this, {
        content: '5秒后自动关闭',
        icon: 'prompt',
        duration: 0,
        mask: false
      })
      setTimeout(() => {
        $Toast.hide(this)
      }, 5000)
    }
  }
}
```

## 示例

```html
<i-button type="ghost" @click="handleText">只显示文本</i-button>
<i-button type="ghost" @click="handleSuccess">成功</i-button>
<i-button type="ghost" @click="handleWarning">警告</i-button>
<i-button type="ghost" @click="handleError">错误</i-button>
<i-button type="ghost" @click="handleLoading">Loading</i-button>
<i-button type="ghost" @click="handleIcon">使用图标</i-button>
<i-button type="ghost" @click="handleImage">使用自定义图片</i-button>
<i-button type="ghost" @click="handleMask">无遮罩层</i-button>

<i-toast ref="toast" />
```

## Props

| 参数   |    说明    |  类型  | 可选值 | 默认值 |
| ------ | :--------: | :----: | :----: | :----: |
| iClass | 自定义类名 | string |   -    |   -    |

