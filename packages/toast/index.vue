<template>
  <div class="mp-lui-toast">
    <div class="i-toast-mask" v-if="visible && mask" @click="handleHide"></div>
    <div class="i-toast" :class="iClass" v-if="visible">
      <block v-if="type !== 'default'">
          <div class="i-toast-type">
              <i-icon i-class="i-toast-icon" type="success" v-if="type === 'success'"></i-icon>
              <i-icon i-class="i-toast-icon" type="prompt" v-else-if="type === 'warning'"></i-icon>
              <i-icon i-class="i-toast-icon" type="delete" v-else-if="type === 'error'"></i-icon>
              <div class="i-toast-icon i-toast-loading" v-else-if="type === 'loading'"></div>
          </div>
      </block>
      <block v-else>
          <i-icon i-class="i-toast-icon" :type="icon" v-if="icon"></i-icon>
          <image class="i-toast-image" :src="image" v-if="image" mode="aspectFit"/>
      </block>
      <div class="i-toast-content" v-if="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
import { setData } from '../utils'
import iIcon from '../icon'

const default_data = {
  visible: false,
  content: '',
  icon: '',
  image: '',
  duration: 2,
  mask: true,
  type: 'default', // default || success || warning || error || loading
};

let timmer = null;

export default {
  name: 'iToast',
  components: {
    iIcon
  },
  props: {
    // 附加类名，控制样式
    iClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ...default_data
    }
  },
  methods: {
    handleShow (options) {
      const { type = 'default', duration = 2 } = options

      setData(this, {
        ...default_data,
        ...options,
        visible: true
      })

      const d = this.duration * 1000
      if (timmer) clearTimeout(timmer)
      if (d !== 0) {
        timmer = setTimeout(() => {
            this.handleHide()
            timmer = null
        }, d)
      }
    },
    handleHide () {
      setData(this, {
        ...default_data
      })
    }
  }
}
</script>

<style lang="less">
  @import './index.less';
</style>
