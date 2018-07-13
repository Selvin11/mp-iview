import { mount } from '@vue/test-utils'
import iAlert from 'packages/alert'

describe('# alert.vue test case', () => {
  describe('# alert 默认值 的测试用例', () => {
    it(`alert 组件的 props 参数默认值应该为下列：
        iClass：undefined,
        type：info,
        closable：false，
        showIcon：false`, () => {
      const wrapper = mount(iAlert)
      expect(wrapper.props().iClass).to.be.undefined
      expect(wrapper.props().type).to.equal('info')
      expect(wrapper.props().closable).to.be.false
      expect(wrapper.props().showIcon).to.be.false
      expect(wrapper.props().desc).to.be.false
    })

    it('alert 组件的 data 参数默认值： {closed：false}', () => {
      const wrapper = mount(iAlert)
      expect(wrapper.vm.closed).to.be.false
    })

    it(`默认值
      closed：false
      iClass：undefined,
      type：info,
      closable：false，
      showIcon：false
      渲染结果：
    `, () => {
      const wrapper = mount(iAlert)
      // closed：false，type==='info',showIcon=== false，desc === false，iClass === undefined
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-info'])
      // <div v-if="showIcon" class="i-alert-icon"> 则 i-alert-icon 不会被渲染出来
      expect(wrapper.find('.i-alert-icon').exists()).to.not.be.true
      // <div class="i-alert-desc">
      // <slot name="desc"></slot>
      // </div>
      // 存在
      expect(wrapper.find('.i-alert-desc').exists()).to.be.true

      // closable默认为false，则下面不会被渲染出来
      // <div class="i-alert-close" v-if="closable" @click="handleTap">
      //   <i-icon type="close"></i-icon>
      // </div>
      expect(wrapper.find('.i-alert-close').exists()).to.not.be.true
    })
  })

  describe('用法1：<i-alert> An info prompt </i-alert>', () => {
    const template = `
    <i-alert>
      An info prompt
    </i-alert>
  `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)
    it(`没穿任何参数，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-info']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-info'])
    })

    it('wrapper.text() 为：An info prompt', () => {
      expect(wrapper.text()).to.equal('An info prompt')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  describe(`用法2：
  <i-alert type="success">
    An success prompt
  </i-alert> , 传入参数 type="success"`, () => {
    const template = `
    <i-alert type="success">
      An success prompt
    </i-alert>
  `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`type="success"，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-success']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-success'])
    })

    it('wrapper.text() 为：An info prompt', () => {
      expect(wrapper.text()).to.equal('An success prompt')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  describe(`用法3：
    <i-alert type="warning">
      An warning prompt
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="warning">
        An warning prompt
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`type="warning"，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-warning']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-warning'])
    })

    it('wrapper.text() 为：An info prompt', () => {
      expect(wrapper.text()).to.equal('An warning prompt')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  describe(`用法4：
    <i-alert type="error">
      An error prompt
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="error">
        An error prompt
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`type="error"，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-error']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-error'])
    })

    it('wrapper.text() 为：An info prompt', () => {
      expect(wrapper.text()).to.equal('An error prompt')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  describe(`用法5：
    <i-alert type="info">
      An info prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="info">
        An info prompt
        <div slot="desc">Content of prompt. Content of prompt.</div>
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`type="info"，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-info']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-info'])
    })

    it(`desc 有值传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.not.be.empty
    })

    it(`desc 有值传入：则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为：Content of prompt. Content of prompt.`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.equal('Content of prompt. Content of prompt.')
    })
  })

  describe(`用法6：
    <i-alert type="success">
      An success prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="success">
        An success prompt
        <div slot="desc">Content of prompt. Content of prompt.</div>
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`type="success"，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-success']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-success'])
    })

    it(`desc 有值传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.not.be.empty
    })

    it(`desc 有值传入：则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为：Content of prompt. Content of prompt.`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.equal('Content of prompt. Content of prompt.')
    })
  })

  describe(`用法7：
    <i-alert type="warning">
      An warning prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="warning">
        An warning prompt
        <div slot="desc">Content of prompt. Content of prompt.</div>
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)
    it(`type="warning"，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-warning']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-warning'])
    })

    it(`desc 有值传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.not.be.empty
    })

    it(`desc 有值传入：则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为：Content of prompt. Content of prompt.`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.equal('Content of prompt. Content of prompt.')
    })
  })

  describe(`用法8：
    <i-alert type="error">
      An error prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="error">
        An error prompt
        <div slot="desc">Content of prompt. Content of prompt.</div>
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)
    it(`type="error"，则组件 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]"
    v-if="!closed" 的 classes 值为：['i-alert', 'i-alert-error']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-error'])
    })

    it(`desc 有值传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.not.be.empty
    })

    it(`desc 有值传入：则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为：Content of prompt. Content of prompt.`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.equal('Content of prompt. Content of prompt.')
    })
  })

  describe(`用法9：type="info" 和 show-icon 一起使用：
    <i-alert type="info" show-icon>
      An info prompt
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="info" show-icon>
        An info prompt
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)
    it(`针对 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" v-if="!closed" class 应该为：['i-alert', 'i-alert-info', 'i-alert-with-icon']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-info', 'i-alert-with-icon'])
    })

    it('wrapper.text() 为：An info prompt', () => {
      expect(wrapper.text()).to.equal('An info prompt')
    })
    it(`show-icon 的值为true时： <div v-if="showIcon" class="i-alert-icon"> 渲染存在`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-prompt').exists()).to.be.true
    })

    it(`show-icon 的值为 true，desc 值为 false，则： :size="desc?24:16" 值为 font-size:16px;`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-prompt').attributes().style).to.equal('font-size: 16px;')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  // <i-alert type="success" show-icon>
  //   An success prompt
  // </i-alert>
  describe(`用法10：type="success" 和 show-icon 一起使用： <i-alert type="success" show-icon>
  An success prompt
</i-alert>`, () => {
    const template = `
      <i-alert type="success" show-icon>
        An success prompt
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)
    it(`针对 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" v-if="!closed" class 应该为：['i-alert', 'i-alert-success', 'i-alert-with-icon']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-success', 'i-alert-with-icon'])
    })

    it('wrapper.text() 为：An success prompt', () => {
      expect(wrapper.text()).to.equal('An success prompt')
    })

    it(`show-icon 的值为true时： <div v-if="showIcon" class="i-alert-icon"> 渲染存在`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-success').exists()).to.be.true
    })

    it(`show-icon 的值为 true，desc 值为 false，则： :size="desc?24:16" 值为 font-size:16px;`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-success').attributes().style).to.equal('font-size: 16px;')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  describe(`用法11：type="warning" 和 show-icon 一起使用：
    <i-alert type="warning" show-icon>
      An warning prompt
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="warning" show-icon>
        An warning prompt
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)
    it(`针对 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" v-if="!closed" class 应该为：['i-alert', 'i-alert-warning', 'i-alert-with-icon']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-warning', 'i-alert-with-icon'])
    })

    it('wrapper.text() 为：An warning prompt', () => {
      expect(wrapper.text()).to.equal('An warning prompt')
    })

    it(`show-icon 的值为true时： <div v-if="showIcon" class="i-alert-icon"> 渲染存在`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-warning').exists()).to.be.true
    })

    it(`show-icon 的值为 true，desc 值为 false，则： :size="desc?24:16" 值为 font-size:16px;`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-warning').attributes().style).to.equal('font-size: 16px;')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  describe(`用法11：type="error" 和 show-icon 一起使用：
    <i-alert type="error" show-icon>
      An error prompt
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="error" show-icon>
        An error prompt
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)
    it(`针对 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" v-if="!closed" class 应该为：['i-alert', 'i-alert-error', 'i-alert-with-icon']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-error', 'i-alert-with-icon'])
    })

    it('wrapper.text() 为：An error prompt', () => {
      expect(wrapper.text()).to.equal('An error prompt')
    })

    it(`show-icon 的值为true时： <div v-if="showIcon" class="i-alert-icon"> 渲染存在`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-delete').exists()).to.be.true
    })

    it(`show-icon 的值为 true，desc 值为 false，则： :size="desc?24:16" 值为 font-size:16px;`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-delete').attributes().style).to.equal('font-size: 16px;')
    })

    it(`desc 的值没有传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.be.empty
    })
  })

  describe(`用法12：show-icon desc type 3个参数一起用
    <i-alert show-icon desc>
      <div class='base-info'>An info prompt</div>
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
  `, () => {
    const template = `
      <i-alert show-icon desc>
        <div class='base-info'>An info prompt</div>
        <div slot="desc">Content of prompt. Content of prompt.</div>
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`针对 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" v-if="!closed" class 应该为：['i-alert', 'i-alert-info', 'i-alert-with-icon']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-info', 'i-alert-with-icon', 'i-alert-with-desc'])
    })

    it(`wrapper.find('.base-info').text() 为：An info prompt`, () => {
      expect(wrapper.find('.base-info').text()).to.equal('An info prompt')
    })

    it(`show-icon 的值为true时： <div v-if="showIcon" class="i-alert-icon"> 渲染存在`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-prompt').exists()).to.be.true
    })

    it(`show-icon 的值为 true，desc 值为 true，则： :size="desc?24:16" 值为 font-size:24px;`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-prompt').attributes().style).to.equal('font-size: 24px;')
    })

    it(`desc 有值传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.not.be.empty
    })

    it(`desc 有值传入 Content of prompt. Content of prompt.，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为：Content of prompt. Content of prompt.`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.equal('Content of prompt. Content of prompt.')
    })
  })

  describe(`用法13：show-icon desc type 3个参数一起用
    <i-alert type="success" show-icon desc>
      <h3>An success prompt</h3>
      <view slot="desc">Content of prompt. Content of prompt.</view>
    </i-alert>
  `, () => {
    const template = `
      <i-alert type="success" show-icon desc>
        <h3>An success prompt</h3>
        <view slot="desc">Content of prompt. Content of prompt.</view>
      </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`针对 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" v-if="!closed" class 应该为：['i-alert', 'i-alert-success', 'i-alert-with-icon']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-success', 'i-alert-with-icon', 'i-alert-with-desc'])
    })

    it(`wrapper.find('h3').text() 为：An info prompt`, () => {
      expect(wrapper.find('h3').text()).to.equal('An success prompt')
    })

    it(`show-icon 的值为true时： <div v-if="showIcon" class="i-alert-icon"> 渲染存在`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-success').exists()).to.be.true
    })

    it(`show-icon 的值为 true，desc 值为 true，则： :size="desc?24:16" 值为 font-size:24px;`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-success').attributes().style).to.equal('font-size: 24px;')
    })

    it(`desc 有值传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.not.be.empty
    })

    it(`desc 有值传入 Content of prompt. Content of prompt.，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为：Content of prompt. Content of prompt.`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.equal('Content of prompt. Content of prompt.')
    })
  })

  describe(`用法14：show-icon desc type 3个参数一起用
      <i-alert type="warning" show-icon desc>
      <h3>An warning prompt</h3>
      <view slot="desc">Content of prompt. Content of prompt.</view>
    </i-alert>
  `, () => {
    const template = `
    <i-alert type="warning" show-icon desc>
      <h3>An warning prompt</h3>
      <view slot="desc">Content of prompt. Content of prompt.</view>
    </i-alert>
    `
    const alertInstance = {
      template: template,
      components: {
        iAlert
      }
    }
    const wrapper = mount(alertInstance)

    it(`针对 :class="['i-alert', 'i-alert-' + type, {'i-alert-with-icon': showIcon}, {'i-alert-with-desc': desc}, iClass]" v-if="!closed" class 应该为：['i-alert', 'i-alert-warning', 'i-alert-with-icon']`, () => {
      expect(wrapper.classes()).deep.equal(['i-alert', 'i-alert-warning', 'i-alert-with-icon', 'i-alert-with-desc'])
    })

    it(`wrapper.find('h3').text() 为：An info prompt`, () => {
      expect(wrapper.find('h3').text()).to.equal('An warning prompt')
    })

    it(`show-icon 的值为true时： <div v-if="showIcon" class="i-alert-icon"> 渲染存在`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-warning').exists()).to.be.true
    })

    it(`show-icon 的值为 true，desc 值为 true，则： :size="desc?24:16" 值为 font-size:24px;`, () => {
      expect(wrapper.find('.i-alert-icon > .i-icon-warning').attributes().style).to.equal('font-size: 24px;')
    })

    it(`desc 有值传入，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值不为空`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.not.be.empty
    })

    it(`desc 有值传入 Content of prompt. Content of prompt.，则 <div class="i-alert-desc"> <slot name="desc"></slot></div> 的值为：Content of prompt. Content of prompt.`, () => {
      expect(wrapper.find('.i-alert-desc').text()).to.equal('Content of prompt. Content of prompt.')
    })
  })
})
