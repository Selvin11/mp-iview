import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import iButton from 'packages/button'

describe('# button.vue test case', () => {
  describe('# 组件 props 默认值', () => {
    const wrapper = mount(iButton)
    it('props.iClass 默认为 空字符串 ', () => {
      expect(wrapper.props().iClass).to.be.empty
    })

    it('props.type 默认为 空字符串 ', () => {
      expect(wrapper.props().type).to.be.empty
    })

    it('props.size 默认为 空字符串 ', () => {
      expect(wrapper.props().size).to.be.empty
    })

    it('props.shape 默认为 square ', () => {
      expect(wrapper.props().shape).to.be.equal('square')
    })

    it('props.disabled 默认为 false ', () => {
      expect(wrapper.props().disabled).to.be.false
    })

    it('props.loading 默认为 false ', () => {
      expect(wrapper.props().loading).to.be.false
    })

    it('props.long 默认为 false ', () => {
      expect(wrapper.props().long).to.be.false
    })

    it('props.openType 默认为 undefined ', () => {
      expect(wrapper.props().openType).to.be.undefined
    })

    it('props.appParameter 默认为 undefined ', () => {
      expect(wrapper.props().appParameter).to.be.undefined
    })

    it('props.hoverStopPropagation 默认为 false ', () => {
      expect(wrapper.props().hoverStopPropagation).to.be.false
    })

    it('props.hoverStartTime 默认为 20 ', () => {
      expect(wrapper.props().hoverStartTime).to.be.equal(20)
    })

    it('props.hoverStayTime 默认为 70 ', () => {
      expect(wrapper.props().hoverStayTime).to.be.equal(70)
    })

    it('props.lang 默认为 en ', () => {
      expect(wrapper.props().lang).to.be.equal('en')
    })

    it('props.sessionFrom 默认为 空字符串 ', () => {
      expect(wrapper.props().sessionFrom).to.be.empty
    })

    it('props.sendMessageTitle 默认为 undefined ', () => {
      expect(wrapper.props().sendMessageTitle).to.be.undefined
    })

    it('props.sendMessagePath 默认为 undefined ', () => {
      expect(wrapper.props().sendMessagePath).to.be.undefined
    })

    it('props.sendMessageImg 默认为 undefined ', () => {
      expect(wrapper.props().sendMessageImg).to.be.undefined
    })

    it('props.showMessageCard 默认为 false ', () => {
      expect(wrapper.props().showMessageCard).to.be.false
    })
  })

  describe('# 传入 单个参数', () => {
    it('单传入 props.iClass 参数 red，则 button的 class 包含 red', () => {
      const template = `
      <i-button iClass="red">iClass="red"的按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        }
      }
      const wrapper = mount(instance)
      expect(wrapper.classes()).to.contain('red')
    })

    it('单传入 props.type 参数 primary，则 button的 class 包含 i-btn-primary', () => {
      const template = `
      <i-button type="primary">默认按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        }
      }
      const wrapper = mount(instance)
      expect(wrapper.classes()).to.contain('i-btn-primary')
    })

    it('单传入 props.size 参数 large button的 class 包含 i-btn-large', () => {
      const template = `
      <i-button size="large">参数size:large的按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        }
      }
      const wrapper = mount(instance)
      expect(wrapper.classes()).to.contain('i-btn-large')
    })

    it('单传入 props.shape 参数 circle button的 class 包含 i-btn-circle', () => {
      const template = `
      <i-button shape="circle">shape:circle的按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        }
      }
      const wrapper = mount(instance)
      expect(wrapper.classes()).to.contain('i-btn-circle')
    })

    it('单传入 props.disabled 参数 disabled button的 class 包含 i-btn-disabled', () => {
      const template = `
      <i-button disabled>disabled的按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        }
      }
      const wrapper = mount(instance)
      expect(wrapper.classes()).to.contain('i-btn-disabled')
    })

    it('单传入 props.long 参数 long button的 class 包含 i-btn-long', () => {
      const template = `
      <i-button long>long的按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        }
      }
      const wrapper = mount(instance)
      expect(wrapper.classes()).to.contain('i-btn-long')
    })

    it('单传入 props.loading 参数 loading button的 class 包含 i-btn-loading', () => {
      const template = `
      <i-button :loading="true">加载中按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        }
      }
      const wrapper = mount(instance)
      expect(wrapper.classes()).to.contain('i-btn-loading')
    })

    it(`单传入 @click="handleClick" ，当点击 button 的时候，则handleClick被调用`, () => {
      // 使用sinon来提供callback模拟数据来判断callback是否被调用
      const clickMethodStub = sinon.stub()
      const template = `
      <i-button @click="handleClick">传入事件按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        },
        methods: {
          handleClick: clickMethodStub
        }
      }
      const wrapper = mount(instance)
      wrapper.find('.i-btn').trigger('click')
      expect(clickMethodStub.called).to.be.true
    })
  })

  describe('# 传入 多个参数', () => {
    it(`传入 disabled 和 @click="handleClick" ，当点击 button 的时候，则handleClick 不会被调用`, () => {
      const clickMethodStub = sinon.stub()
      const template = `
      <i-button disabled @click="handleClick">disabled和事件按钮</i-button>
    `
      const instance = {
        template: template,
        components: {
          iButton
        },
        methods: {
          handleClick: clickMethodStub
        }
      }
      const wrapper = mount(instance)
      // 说明传入参数ok
      expect(wrapper.find(iButton).props().disabled).to.be.true
      // 触发事件，被if return掉
      wrapper.find('.i-btn').trigger('click')
      expect(clickMethodStub.called).to.be.false
    })
  })
})
