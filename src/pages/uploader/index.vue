<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Uploader</div>
      <div class="page__desc">上传组件</div>
    </div>
    <div class="page__bd">
      <Uploader />
    </div>
  </div>
</template>

<script>
import Uploader from '../../../packages/uploader'

export default {
  data () {
    return {
      files: [],
      max: 3
    }
  },
  components: {
    Uploader
  }
}
</script>
