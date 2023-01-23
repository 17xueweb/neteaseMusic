<template>
  <view class="list">
    <view class="fixbg">
    </view>
    <musichead title="歌单" :icon="true" color="white"></musichead>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="list-head">
          <view class="list-head-img">
            <image src="../../static/wangyiyunyinyue.png"></image>
            <text class="iconfont iconyousanjiao">30亿</text>
          </view>
          <view class="list-head-text">
            <view class="">
              测试文字
            </view>
            <view class="">
              <image src="../../static/wangyiyunyinyue.png"></image>测试文字
            </view>
            <view class="">
              测试文字测试文字测试文字
            </view>
          </view>
        </view>
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
      console.log(options.listId);
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.list-head {
  display: flex;
  margin: 30rpx;
}
.list-head-img {
  width: 264rpx;
  height: 264rpx;
  border-radius: 30rpx;
  overflow: hidden;
  position: relative;
  margin-right: 42rpx;
}
.list-head-img image {
  width: 100%;
  height: 100%;
}
.list-head-img text {
  position: absolute;
  right: 8rpx;
  top: 8rpx;
  color: white;
  font-size: 26rpx;
}
.list-head-text {
  flex: 1;
  color: #f0f2f7;
}
.list-head-text view:nth-child(1) {
  color: white;
  font-size: 34rpx;
  
}
.list-head-text view:nth-child(2) {
  display: flex;
  margin: 20rpx 0;
  font-size: 24rpx;
  align-items: center;
}
.list-head-text view:nth-child(2) image {
  width: 54rpx;
  height: 54rpx;
  border-radius: 50%;
  margin-right: 14rpx;
}
.list-head-text view:nth-child(3) {
  line-height: 34rpx;
  font-size: 22rpx;
}
</style>
