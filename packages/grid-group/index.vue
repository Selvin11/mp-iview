<template>
  <div :class="['i-grid', iClass]">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    iClass: {
      type: String,
      default: ''
    }
  },
  name: 'iGridGroup',
  mounted () {
    const children = this.$children
    const len = children.length
    if (len === 0) {
      return
    }
    children.forEach((item) => {
      item.updateDataChange({
        width: (100 / len) + '%'
      })
    })
  }
}
</script>
