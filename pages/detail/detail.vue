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
        <view class="detail-like">
          <view class="detail-like-head">
            喜欢这首歌的人也听
          </view>
          <view class="detail-like-item">
            <view class="detail-like-img">
              <image src="../../static/logo.png"></image>
            </view>
            <view class="detail-like-song">
              <view>蓝</view>
              <view class="">
                <image src="../../static/dujia.png"></image>
                <image src="../../static/sq.png"></image>
                石白其 - 蓝
              </view>
            </view>
            <text class="iconfont iconbofang"></text>
          </view>
          <view class="detail-like-item">
            <view class="detail-like-img">
              <image src="../../static/logo.png"></image>
            </view>
            <view class="detail-like-song">
              <view>蓝</view>
              <view class="">
                <image src="../../static/dujia.png"></image>
                <image src="../../static/sq.png"></image>
                石白其 - 蓝
              </view>
            </view>
            <text class="iconfont iconbofang"></text>
          </view>
          <view class="detail-like-item">
            <view class="detail-like-img">
              <image src="../../static/logo.png"></image>
            </view>
            <view class="detail-like-song">
              <view>蓝</view>
              <view class="">
                <image src="../../static/dujia.png"></image>
                <image src="../../static/sq.png"></image>
                石白其 - 蓝
              </view>
            </view>
            <text class="iconfont iconbofang"></text>
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
.detail-like {
  margin: 0 30rpx;
}
.detail-like-head {
  font-size: 36rpx;
  color: white;
  margin: 50rpx 0;
  
}
.detail-like-item {
  display: flex;
  align-items: center;
  margin-bottom: 28rpx;
}
.detail-like-img {
  width: 82rpx;
  height: 82rpx;
  border-radius: 20rpx;
  overflow: hidden;
  margin-right: 20rpx;
}
.detail-like-img image {
  width: 100%;
  height: 100%;
}
.detail-like-song {
  flex: 1;
  color: #c6c2bf;
}
.detail-like-song view:nth-child(1) {
  font-size: 28rpx;
  color: white;
  margin-bottom: 12rpx;
}
.detail-like-song view:nth-child(1) {
  font-size: 22rpx;
}
.detail-like-song image{
  width: 26rpx;
  height: 20rpx;
  margin-right: 10rpx;
}
.detail-like-item text {
  font-size: 50rpx;
  color: #c6c2bf;
}

</style>
