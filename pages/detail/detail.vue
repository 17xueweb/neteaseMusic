<template>
  <view class="detail">
    <view class="fixbg" :style="{ 'background-image': 'url(/static/wangyiyunyinyue.png)'}"></view>
    <musichead title="歌单" :icon="true" color="white"></musichead>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="detail-play">
          <image src="../../static/logo.png"></image>
          <text class="iconfont iconpause"></text>
          <view></view>
        </view>
        <view class="detail-lyric">
          <view class="detail-lyric-wrap">
            <view class="detail-lyric-item">
              测试文字测试文字测试文字
            </view>
            <view class="detail-lyric-item active">
              测试文字测试
            </view>
            <view class="detail-lyric-item">
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
      console.log(options.songId);
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.detail-play {
  width: 580rpx;
  height: 580rpx;
  background: url(~@/static/disc.png);
  background-size: cover;
  margin: 214rpx auto 0 auto;
  position: relative;
}
.detail-play image {
  width: 370rpx;
  height: 370rpx;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.detail-play text {
  font-size: 100rpx;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100rpx;
  height: 100rpx;
}
.detail-play view {
  width: 230rpx;
  height: 360rpx;
  background: url(~@/static/needle.png);
  position: absolute;
  left: 100rpx;
  right: 0;
  top: -200rpx;
  margin: auto;
  background-size: cover;
}
.detail-lyric {
  font-size: 32rpx;
  line-height: 82rpx;
  height: 246rpx;
  text-align: center;
  overflow: hidden;
  color: #6f6e73;
}
.detail-lyric-wrap {
  
}
.detail-lyric-item {
  height: 82rpx;
  
}
.detail-lyric-item.active {
  color: white;
  
}

</style>
