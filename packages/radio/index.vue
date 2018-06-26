<template>
  <div class="i-cell-group" :class="iClass">
    <div class="i-class i-radio" @click="radioTap(list)" v-for="list in lists" :key="list.value">
      <div class="i-cell">
        <div class="i-cell-bd i-radio-cell">
          <label>
            <radio 
              :value="list.value" 
              :checked="list.checked" 
              :color="list.checked ? color : ''" 
              :disabled="list.disabled" 
              :class="['i-radio-radio', positionCls]" 
            />
            <div class="i-radio-title">{{list.name}}</div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = 'i-radio'
export default {
  name: 'iRadio',
  props: {
    iClass: String,
    color: {
      type: String,
      default: '#2d8cf0'
    },
    position: {
      type: String,
      default: 'left' // left right
    },
    lists: {
      type: Array,
      default: [] // [{item.value, item.checked}...]
    }
  },
  methods: {
    radioTap (list) {
      let current = []
      this.lists.forEach((item, index) => {
        if (list.name === item.name) {
          this.lists.splice(index, 1, {
            name: item.name,
            value: item.value,
            checked: !item.checked
          })
        } else {
          this.lists.splice(index, 1, {
            name: item.name,
            value: item.value,
            checked: false
          })
        }
      })
      current = this.lists.filter(list => list.checked)
      this.$emit('radioChange', current)
    }
  },
  computed: {
    positionCls () {
      return this.position.indexOf('left') !== -1 ? `${prefixCls}-radio-left` : `${prefixCls}-radio-right`
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
