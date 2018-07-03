<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Tag</div>
      <div class="page__desc">标签。</div>
    </div>
    <div class="page__bd">
      <view class="tag-example">
        <view class="one-tag">基本用法</view>
        <i-tag>标签一</i-tag>

        <view class="one-tag">设置边框配置</view>
        <i-tag iClass="i-tags" name="标签一" type="border" color="red">
          标签一
        </i-tag>
        <i-tag iClass="i-tags" name="标签二" type="border" color="green">
          标签二
        </i-tag>
        
        <view class="one-tag">各种颜色配置</view>
        <i-tag iClass="i-tags" name="单个标签">标签一</i-tag>
        <i-tag iClass="i-tags" name="标签二" color="green">标签二</i-tag>
        <i-tag iClass="i-tags" name="标签三" color="blue">标签三</i-tag>
        <i-tag iClass="i-tags" name="标签四" color="yellow">标签四</i-tag>
        
        <view class="one-tag">多个标签</view>
        <i-tag
          iClass="i-tags" 
          v-for="(tag, index) in tags" 
          :key="index"
          @change="handleChange" 
          checkable
          :name="index" 
          :color="tag.color" 
          :checked="tag.checked" 
          :title="tag.name"
          type="border"
        >
        </i-tag>
      </view>
    </div>
  </div>
</template>


<script>
import iTag from '../../../packages/tag'

export default {
  data () {
    return {
      oneChecked: false,
      tags: [{
        name: '标签一',
        checked: false,
        color: 'default'
      },
      {
        name: '标签二',
        checked: false,
        color: 'red'
      },
      {
        name: '标签三',
        checked: true,
        color: 'blue'
      },
      {
        name: '标签四',
        checked: true,
        color: 'green'
      }]
    }
  },
  components: {
    iTag
  },
  methods: {
    handleChange (name) {
      console.log('name', name)
    }
  }
}
</script>

<style lang="less">
.tag-example{
    padding:10px;
}
.one-tag{
    font-size:14px;
    margin:20px 5px 5px 0;
}
.i-tags{
    margin:10px 5px 0 0;
}
</style>


