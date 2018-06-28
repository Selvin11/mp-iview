<template>
  <div class="i-class i-tab-bar-item" @click="handleClickItem">
    <div class="i-badge">
      <div>
        <i-icon :iClass="['i-tab-bar-item-icon', isCurrent ? 'item-index--i-tab-bar-item-icon-current' : '']" :color="isCurrent ? currentColor : ''" :type="isCurrent ? currentIcon : icon" size="22"></i-icon>
        <div v-if="isCurrent && currentColor" :class="['i-tab-bar-item-title', isCurrent ? 'i-tab-bar-item-title-current' : '']" :style="{'color': currentColor}">
          {{title}}
        </div>
        <div v-else :class="['i-tab-bar-item-title', isCurrent ? 'i-tab-bar-item-title-current' : '']">
          {{title}}
        </div>
      </div>
      <div class="i-badge-dot" v-if="dot"></div>
      <div class="i-badge-count" :class="iClassAlone" v-else-if="count !== 0">{{ finalCountComputed }}</div>
    </div>
  </div>
</template>

<script>
import iIcon from '../icon'
export default {
  name: 'iTabbarItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    currentIcon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    title: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    }
  },
  components: {
    iIcon
  },
  data () {
    return {
      isCurrent: false,
      currentColor: ''
    }
  },
  created () {
    this.isCurrent = this.$parent.current === this.name
    this.currentColor = this.$parent.current === this.name && this.$parent.color
  },
  computed: {
    titleComputed () {
      return this.title
    },
    finalCountComputed () {
      let count = this.dot ? 0 : this.count
      return parseInt(count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : count
    }
  },
  methods: {
    handleClickItem () {
      this.$parent.$emit('change', this.name)
    }
  }
}
</script>


<style lang="less">
@import './index.less';
@import '../badge/index.less';
</style>