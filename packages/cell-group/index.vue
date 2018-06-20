<template>
  <div class="i-cell-group" :class="iClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iCellGroup',
  props: {
    iClass: String
  }
}
</script>
