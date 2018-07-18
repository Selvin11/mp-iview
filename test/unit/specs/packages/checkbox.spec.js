import { mount } from '@vue/test-utils'
// import sinon from 'sinon'
import iCheckbox from 'packages/checkbox'

describe('# checkbox.vue test case', () => {
  describe('# 组件 props 默认值', () => {
    const wrapper = mount(iCheckbox)
    it('props.iClass 默认为 undefined ', () => {
      expect(wrapper.props().iClass).to.be.undefined
    })

    it('props.color 默认为 #2d8cf0 ', () => {
      expect(wrapper.props().color).to.be.equal('#2d8cf0')
    })

    it('props.position 默认为 left ', () => {
      expect(wrapper.props().position).to.be.equal('left')
    })

    it('props.lists 默认为 空数组 ', () => {
      expect(wrapper.props().lists).to.deep.equal([])
    })
  })

  describe('# 传入 iClass="diy-class" @checkboxChange="handleFruitChange" :lists="fruit" :position="position" 等参数', () => {
    const template = `
      <i-checkbox iClass="diy-class" @checkboxChange="handleFruitChange" :lists="fruit" :position="position" />
    `
    const clickMethodStub = sinon.fake()
    const fruit = [{
      value: 1,
      name: '香蕉',
      checked: true
    }, {
      value: 2,
      name: '苹果'
    }, {
      value: 3,
      name: '西瓜',
      checked: true
    }, {
      value: 4,
      name: '葡萄',
      disabled: true
    }]
    const instance = {
      template: template,
      data () {
        return {
          fruit: fruit,
          position: 'left'
        }
      },
      methods: {
        handleFruitChange: clickMethodStub
      },
      components: {
        iCheckbox
      }
    }
    const wrapper = mount(instance)

    it(`参数包含有 iClass="diy-class" ，则组件包含有 diy-class 样式`, () => {
      expect(wrapper.classes()).to.contain('diy-class')
    })

    it('传入参数 fruit 为数组，则渲染后包含 .i-checkbox 节点也为应该等于 fruit数组的长度', () => {
      expect(wrapper.findAll('.i-checkbox').length).to.equal(fruit.length)
    })

    it('传入参数 fruit 为数组，则渲染后 每条记录.i-checkbox-title 节点的值等于 fruit 每条记录的值', () => {
      const titleWrapperArr = wrapper.findAll('.i-checkbox-title')
      fruit.forEach((element, index) => {
        expect(titleWrapperArr.at(index).text()).to.equal(element.name)
      })
    })

    it('传入 position 为 left，则 radio 的每条记录都应该包含有：i-checkbox-checkbox-left', () => {
      const radioWrapperArr = wrapper.findAll('.i-checkbox-radio')
      fruit.forEach((element, index) => {
        expect(radioWrapperArr.at(index).classes()).to.contain('i-checkbox-checkbox-left')
      })
    })

    it('传入参数 fruit 为数组，则渲染后 ，radio 每条记录的又有的属性要与 fruit 记录的属性一致 ', () => {
      const radioWrapperArr = wrapper.findAll('radio')
      fruit.forEach((element, index) => {
        // 属性对象
        const raidoWrapperAttributes = radioWrapperArr.at(index).attributes()
        // 判断 value
        expect(raidoWrapperAttributes.value).to.be.equal(element.value.toString())
        // 判断 checked
        expect(raidoWrapperAttributes.checked).to.be.equal(element.checked ? 'checked' : undefined)
        // 判断 color
        expect(raidoWrapperAttributes.color).to.be.equal(element.checked ? wrapper.find(iCheckbox).props().color : '')
        // 判断 disabled
        expect(raidoWrapperAttributes.disabled).to.be.equal(element.disabled ? 'disabled' : undefined)
      })
    })

    it('点击 某条记录，则该记录变成选中，且 handleFruitChange 则返回CheckBox 选中数组 跟 组件的 props 的 list.checked 过滤后一致 ', () => {
      wrapper.find('.i-checkbox').trigger('click')
      // 判断函数被调用
      expect(clickMethodStub.called).to.be.true
      // 判断 handleFruitChange 函数传回的数据 跟 props 选中的 是否 一致
      // 回调数据
      let lastArg = clickMethodStub.lastArg
      expect(lastArg).to.deep.equal(wrapper.find(iCheckbox).props().lists.filter(list => list.checked))
    })
  })
})
