<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Uploader</div>
      <div class="page__desc">文件上传</div>
    </div>
    <div class="page__bd">
      <Uploader
        @onSelect="onSelect"
        :file-list="files"
        title="文件上传"
        :max="max" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Uploader from '../../../packages/uploader-base'

export default {
  data () {
    return {
      files: [],
      max: 3
    }
  },
  components: {
    Uploader
  },
  methods: {
    onSelect () {
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        count: this.max,
        success: (res) => {
          this.files = this.files.concat(res.tempFiles)
          if (this.files[0]) {
            Vue.set(this.files[0], 'failure', true)
          }
        }
      })
    }
  }
}
</script>
