<template>
  <div class="i-dialog-wrap">
    <div :class="['i-dialog-mask i-class-mask', { 'i-dialog-mask-show': visible }]"></div>
    <div :class="['i-class i-dialog', { 'i-dialog-show': visible }]">
      <div class="i-dialog-main">
        <div class="i-dialog-content">
          <div class="i-dialog-title" v-if="title">{{ title }}</div>
          <div class="i-dialog-body"><slot></slot></div>
          <div class="i-dialog-actions" v-if="actions.length">
            <div v-if="actionMode === 'horizontal'">
              <div class="i-dialog-grid i-grid">
                <div  v-for="(item, index) in actions" :class="['i-grid-item', { 'i-dialog-grid-item-last': actions.length === (index + 1), 'i-dialog-grid-item': actions.length !== (index + 1) }]" :key="item.name" :style="{width: (100 / actions.length) + '%'}">
                  <button class="i-btn-long i-btn-ghost i-btn" :plain="true" @click="handleClickItem(index)">
                    <div class="i-dialog-btn-loading" v-if="item.loading"></div>
                    <div v-if="item.icon" :class="'i-dialog-btn-icon i-icon i-icon-' + item.icon " style="font-size: 14px;"></div>
                    <div class="i-dialog-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</div>
                  </button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="i-dialog-action-vertical" v-for="item in actions" :key="item.name">
                <button class="i-btn-long i-btn-ghost i-btn" :plain="true" @click="handleClickItem(index)">
                  <div class="i-dialog-btn-loading" v-if="item.loading"></div>
                  <div v-if="item.icon" :class="'i-dialog-btn-icon i-icon i-icon-' + item.icon " style="font-size: 14px;"></div>
                  <div class="i-dialog-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</div>
                </button>
              </div>
            </div>
          </div>
          <div class="i-dialog-actions" v-else>
            <div class="i-dialog-grid i-grid" v-if="showOk || showCancel">
              <div class="i-dialog-grid-item i-grid-item" style="width: 50%">
                <button class="i-btn-long i-btn-ghost i-btn" :plain="true" @click="handleClickCancel">{{ cancelText }}</button>
              </div>
              <div class="i-dialog-grid-item-last i-grid-item" style="width: 50%">
                <button class="i-dialog-btn-ok i-btn-long i-btn-ghost i-btn" :plain="true" @click="handleClickOk">{{ okText }}</button>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
  import iButton from '../button'
  import iIcon from '../icon'
  export default {
    components: {
      iButton,
      iIcon
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      // 按钮组，有此值时，不显示 ok 和 cancel 按钮
      actions: {
        type: Array,
        default: []
      },
      // horizontal || vertical
      actionMode: {
        type: String,
        default: 'horizontal'
      },
      showOk: {
        type: Boolean,
        default: true
      },
      showCancel: {
        type: Boolean,
        default: true
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      handleClickItem (index) {
        this.$emit('click', index)
      },
      handleClickOk () {
        this.$emit('ok')
      },
      handleClickCancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="less">
@import './index.less';
</style>
