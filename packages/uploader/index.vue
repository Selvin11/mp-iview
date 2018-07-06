<template>
  <div class="weui-cells">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <div class="weui-uploader">
          <div class="weui-uploader__hd">
            <div class="weui-uploader__title">图片上传</div>
            <div class="weui-uploader__info">{{ files.length }}</div>
          </div>
          <div class="weui-uploader__bd">
            <div class="weui-uploader__files" id="uploaderFiles">
              <div v-for="item in files" :key="item">
                <div class="weui-uploader__file" @click="previewImage">
                  <img class="weui-uploader__img" :src="item" />
                </div>
              </div>
              <div class="weui-uploader__input-box">
                <div class="weui-uploader__input" @click="onSelect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        files: []
      }
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
      },
      previewImage (e) {
        wx.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.files // 需要预览的图片http链接列表
        })
      }
    }
  }
</script>
<style lang="less">
  @import './index.less';
</style>
