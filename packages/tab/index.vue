<template>
  <div :class="['i-tabs-tab', scroll ? 'i-tabs-tab-scroll' : '', isCurrent ? 'i-tabs-tab-current' : '', iClass]" @click="handleClickItem">
    <div class="i-badge">
      <div>
        <div v-if="isCurrent && currentColor" :class="['i-tabs-tab-title', isCurrent ? 'i-tabs-tab-title-current' : '']" :style="{'color': currentColor}">
          {{ title }}
        </div>
        <div v-else :class="['i-tabs-tab-title', isCurrent ? 'i-tabs-tab-title-current' : '']">
          {{ title }}
        </div>
      </div>
      <div class="i-badge-dot" v-if="dot"></div>
      <div class="i-badge-count" :class="iClassAlone" v-else-if="count !== 0">{{ finalCountComputed }}</div>
    </div>
    <div class="i-tabs-tab-bar" v-if="isCurrent" :style="{'background': currentColor}"></div>
  </div>
</template>

<script>
export default {
  name: 'iTab',
  props: {
    iClass: String,
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isCurrent: false,
      currentColor: '',
      scroll: false
    }
  },
  mounted () {
    this.isCurrent = this.$parent.current === this.name
    this.currentColor = this.$parent.current === this.name && this.$parent.color
  },
  methods: {
    handleClickItem () {
      this.$parent.$emit('change', this.name)
    }
  },
  computed: {
    finalCountComputed () {
      let count = this.dot ? 0 : this.count
      return parseInt(count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : count
    }
  }
}
</script>

<style lang="less">
@import '../badge/index.less';
@import './index.less';
</style>
