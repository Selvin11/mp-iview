<template>
  <div class="mp-lui-msg">
    <div class="i-message" :class="{iClass, 'i-message-show': visible, 'i-message-default': type === 'default', 'i-message-success': type === 'success', 'i-message-warning': type === 'warning', 'i-message-error': type === 'error'}">
        {{ content }}
    </div>
  </div>
</template>

<script>
import { setData } from "../utils";

const default_data = {
  visible: false,
  content: "",
  duration: 2,
  type: "default" // default || success || warning || error
};

let timmer = null;

export default {
  name: "iMessage",
  props: {
    // 附加类名，控制样式
    iClass: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      ...default_data
    };
  },
  computed: {
    iMessageTypeClass: function () {
      return 'i-message-' + this.type
    }
  },
  methods: {
    handleShow(options) {
      const { type = "default", duration = 2 } = options

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

    handleHide() {
      setData(this, {
        ...default_data
      })
    }
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
