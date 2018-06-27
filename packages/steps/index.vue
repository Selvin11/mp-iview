<template>
  <div class="i-steps" :class="iClass">
    <div 
      :class="['i-step-item', step.class, direction === 'vertical' ? 'i-step-vertical' : 'i-step-horizontal']" 
      :style="step.style"
      v-for="(step, index) in stepsComputed"
      :key="index"
    >
      <div class="i-step-item-ico">
        <div class="i-step-ico" v-if="index < current || step.icon">
          <div 
            class="i-icon" 
            :class="['i-icon-' + step.type, 'i-step-ico-in']" 
          >
          </div>
        </div>
        <div class="i-step-ico" v-else>{{ index+1 }}</div>
        <div class="i-step-line" v-if="index !== stepsComputed.length - 1"></div>
      </div>
      <div class="i-step-item-main">
        <div class="i-step-item-title" v-if="step.title !== ''">
          {{step.title}}
        </div>
        <!-- <div class="i-step-item-title" v-else>
          <slot name="title"></slot>
        </div> -->
        <div class="i-step-item-content" v-if="step.content !== ''">
          {{step.content}}
        </div>
        <!-- <div class="i-step-item-content" v-else>
          <slot name="content"></slot>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iSteps',
  props: {
    iClass: String,
    steps: {
      type: Array,
      default: [] // [{icon, title, content}]
    },
    direction: {
      type: String,
      default: 'horizontal' // value has horizontal or vertical
    },
    current: {
      type: Number,
      default: -1
    }
  },
  computed: {
    stepsComputed () {
      let allStatus = ['wait', 'process', 'finish', 'error']
      // wait、process、finish、error
      let startClass = 'i-step-'
      let len = this.steps.length
      this.steps.forEach((step, index) => {
        // 每一项的状态类名
        let cindex = allStatus.indexOf(step.status)
        this.steps.splice(index, 1, Object.assign(this.steps[index], {
          class: ''
        }))
        if (cindex !== -1) {
          this.steps.splice(index, 1, Object.assign(this.steps[index], {
            class: startClass + allStatus[cindex]
          }))
        }
        if (index < this.current) {
          this.steps.splice(index, 1, Object.assign(this.steps[index], {
            class: startClass + 'finish'
          }))
        } else if (index === this.current) {
          this.steps.splice(index, 1, Object.assign(this.steps[index], {
            class: startClass + 'process'
          }))
        }
        // 每一项的icon的type
        if (!step.type && step.status === 'error') {
          this.steps.splice(index, 1, Object.assign(this.steps[index], {
            type: 'close'
          }))
        } else if (!step.type) {
          this.steps.splice(index, 1, Object.assign(this.steps[index], {
            type: 'right'
          }))
        }

        // 每一项的宽度
        if (this.direction === 'horizontal') {
          this.steps.splice(index, 1, {
            ...this.steps[index],
            style: 'width:' + 100 / len + '%'
          })
        } else {
          this.steps.splice(index, 1, {
            ...this.steps[index],
            style: 'width: 100%;'
          })
        }
      })
      console.log(this.steps)
      return this.steps
    }
  }
}
</script>


<style lang="less">
@import './index.less';
@import '../icon/index.less';
</style>