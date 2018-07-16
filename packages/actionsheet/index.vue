<template>
  <div>
    <div class="i-as-mask" :class="[{'i-as-mask-show': visible}, iClassMask]" @click="handleClickMask"></div>
    <div class="i-as" :class="[{'i-as-show': visible}, iClass]">
      <div class="i-as-header" :class="iClassHeader">
        <slot name="header"></slot>
      </div>
      <div class="i-as-actions">
        <div class="i-as-action-item" v-for="(item, index) in actions" :key="index">
          <button
            class="i-btn i-btn-long i-btn-large i-btn-ghost i-btn-square"
            :plain="true"
            :data-index="index"
            @click="handleClickItem" 
            :open-type="item.openType"
          >
            <div class="i-as-btn-loading" v-if="item.loading"></div>
            <i-icon v-if="item.icon" :type="item.icon" i-class="i-as-btn-icon"></i-icon>
            <div class="i-as-btn-text" :style="{color: item.color}">{{ item.name }}</div>
          </button>
        </div>
      </div>
      <div class="i-as-cancel" v-if="showCancel">
        <button
          class="i-btn i-btn-long i-btn-large i-btn-ghost i-btn-square i-as-cancel-btn"
          :plain="true"
          @click="handleClickCancel" 
        >
          {{ cancelText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import iIcon from '../icon'
  // 由于iButton组件中有slot，在iActionSheet组件中循环iButton组件会导致无法正常渲染，因此用原生button代替
  export default {
    name: 'iActionSheet',
    components: {
      iIcon
    },
    props: {
      // 附加类名，控制样式
      iClass: {
        type: String,
        default: ''
      },
      iClassHeader: {
        type: String,
        default: ''
      },
      iClassMask: {
        type: String,
        default: ''
      },
      visible: {
        type: Boolean,
        default: false
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      showCancel: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      actions: {
        type: Array,
        default: []
      }
    },
    methods: {
      handleClickMask () {
        if (!this.maskClosable) return
        this.handleClickCancel()
      },

      handleClickItem ({ currentTarget = {} }) {
        const dataset = currentTarget.dataset || {}
        const { index } = dataset
        this.$emit('click', { index })
        this.handleClickCancel()
      },

      handleClickCancel () {
        this.$emit('cancel')
      }
    }
  }
</script>
<style lang="less">
  @import '../button/index.less';
  @import './index.less';
</style>
