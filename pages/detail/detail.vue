<template>
  <view class="detail">
    <view class="fixbg" :style="{ 'background-image': 'url(/static/wangyiyunyinyue.png)'}"></view>
    <musichead title="歌单" :icon="true" color="white"></musichead>
    <view class="container">
      <scroll-view scroll-y="true">
        </scroll-view>
      </view>
  </view>
</template>

<script>
  import musichead from '@/components/musichead/musichead.vue'
  import '@/common/iconfont.css';
  export default {
    data() {
      return {
        
      }
    },
    onLoad(options) {
      console.log(options.songId);
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
