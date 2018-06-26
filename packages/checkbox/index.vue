<template>
  <div class="i-cell-group" :class="iClass">
    <div class="i-checkbox" @click="checkboxTap(list)" v-for="list in lists" :key="list.value">
      <div class="i-cell">
        <div class="i-cell-bd i-checkbox-cell">
          <label>
            <radio 
              :value="list.value" 
              :checked="list.checked" 
              :color="list.checked ? color : ''" 
              :disabled="list.disabled" 
              :class="['i-checkbox-radio', positionCls]" 
            />
            <div class="i-checkbox-title">{{list.name}}</div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = 'i-checkbox'
export default {
  name: 'iCheckbox',
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
    checkboxTap (list) {
      let current = []
      this.lists.forEach((item, index) => {
        if (list.name === item.name) {
          this.lists.splice(index, 1, {
            name: item.name,
            value: item.value,
            checked: !item.checked
          })
        }
      })
      current = this.lists.filter(list => list.checked)
      this.$emit('checkboxChange', current)
    }
  },
  computed: {
    positionCls () {
      return this.position.indexOf('left') !== -1 ? `${prefixCls}-checkbox-left` : `${prefixCls}-checkbox-right`
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
