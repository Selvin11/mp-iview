# Step

> 步骤条

## 引入

```js
import iSteps from 'mp-lui/packages/steps'
import iStep from 'mp-lui/packages/step'

export default {
  components: {
    iSteps,
    iStep
  },
  data () {
    return {
      current: 2,
      direction: 'horizontal'
    }
  }
}
```

## 示例

```html
<div class="one-tag">基本用法</div>
<i-steps>
  <i-step status="finish" title="已完成" content="这里是该步骤的描述信息" />
  <i-step status="process" title="进行中" content="这里是该步骤的描述信息" />
  <i-step title="错误" content="这里是该步骤的描述信息" />
</i-steps>
<div class="one-tag">使用 icon 图标</div>
<i-steps>
  <i-step status="finish" icon="barrage" title="已完成" content="这里是该步骤的描述信息" />
  <i-step status="process" icon="brush" title="进行中" content="这里是该步骤的描述信息" />
  <i-step icon="collection" title="错误" content="这里是该步骤的描述信息" />
</i-steps>
<div class="one-tag">步骤进度</div>
<i-steps :current="current" :direction="direction">
  <i-step title="已完成" content="这里是该步骤的描述信息" />
  <i-step title="进行中" content="这里是该步骤的描述信息" />
  <i-step title="错误" content="这里是该步骤的描述信息" />
</i-steps>
```

## Props

| 参数（Steps） |    说明    |  类型  |        可选值         |   默认值   |
| ------------- | :--------: | :----: | :-------------------: | :--------: |
| iClass        | 自定义类名 | string |           -           |     -      |
| direction     |    方向    | string | horizontal， vertical | horizontal |
| current       |  当前位置  | number |           -           |     -1     |

| 参数（Step） |    说明    |  类型  |            可选值            | 默认值 |
| ------------ | :--------: | :----: | :--------------------------: | :----: |
| iClass       | 自定义类名 | string |              -               |   -    |
| status       |    状态    | string | wait、process、finish、error |   -    |
| title        |    标题    | string |              -               |   -    |
| content      |    内容    | string |              -               |   -    |
| icon         |  图标类型  | string |              -               |   -    |

## Slot（Steps）

| 名称 |   说明   |
| ---- | :------: |
| -    | 装载step |

