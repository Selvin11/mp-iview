<template>
  <div 
    :class="['i-step-item', stepClass, direction === 'vertical' ? 'i-step-vertical' : 'i-step-horizontal']" 
    :style="stepStyle"
  >
    <div class="i-step-item-ico">
      <div class="i-step-ico" v-if="index < current || icon">
        <div 
          class="i-icon" 
          :class="['i-icon-' + stepIcon, 'i-step-ico-in']" 
        >
        </div>
      </div>
      <div class="i-step-ico" v-else>{{ index+1 }}</div>
      <div class="i-step-line" v-if="index !== len - 1"></div>
    </div>
    <div class="i-step-item-main">
      <div class="i-step-item-title" v-if="title !== ''">
        {{title}}
      </div>
      <!-- <div class="i-step-item-title" v-else>
        <slot name="title"></slot>
      </div> -->
      <div class="i-step-item-content" v-if="content !== ''">
        {{content}}
      </div>
      <!-- <div class="i-step-item-content" v-else>
        <slot name="content"></slot>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'iSteps',
  props: {
    iClass: String,
    status: {
      type: String,
      // wait、process、finish、error
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      len: 1, // step length
      index: 0, // current in step index
      current: 0, // parent component select current index
      direction: 'horizontal' // css direction
    }
  },
  computed: {
    stepClass () {
      var allStatus = ['wait', 'process', 'finish', 'error']
      // wait、process、finish、error
      let startClass = 'i-step-'
      let classes = ''
      let cindex = allStatus.indexOf(this.status)
      if (cindex !== -1) {
        classes = startClass + allStatus[cindex]
      }
      if (this.index < this.current) {
        classes = startClass + 'finish'
      } else if (this.index === this.current) {
        classes = startClass + 'process'
      }
      return classes
    },
    stepStyle () {
      if (this.direction === 'horizontal') {
        return 'width :' + 100 / this.len + '%'
      } else {
        return 'width : 100%;'
      }
    },
    stepIcon () {
      let classes = ''
      if (this.status === 'error') {
        classes = 'close'
      } else {
        classes = 'right'
      }
      if (this.icon !== '') {
        classes = this.icon
      }
      return classes
    }
  },
  methods: {
    updateDataChange (options) {
      this.len = options.len
      this.index = options.index
      this.current = options.current
      this.direction = options.direction
    }
  }
}
</script>
