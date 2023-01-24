<template>
  <view class="list">
    <view class="fixbg" :style="{ 'background-image': 'url('+playlist.coverImgUrl+')'}">
    </view>
    <musichead title="歌单" :icon="true" color="white"></musichead>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="list-head">
          <view class="list-head-img">
            <image :src="playlist.coverImgUrl"></image>
            <text class="iconfont iconyousanjiao">{{playlist.playCount}}</text>
          </view>
          <view class="list-head-text">
            <view class="">
              {{playlist.name}}
            </view>
            <view class="">
              <image :src="playlist.creator.avatarUrl"></image>{{ playlist.creator.nickname }}
            </view>
            <view class="">
              {{playlist.description}}
            </view>
          </view>
        </view>
        <!-- #ifdef MP-WEIXIN -->
        <button class="list-share" open-type="share">
          <text  class="iconfont iconicon-"></text>分享给微信好友
        </button>
        <!-- #endif -->
        <view class="list-music">
          <view class="list-music-head">
            <text class="iconfont iconbofang1"></text>
            <text>播放全部</text>
            <text>(共100首)</text>
          </view>
          <view class="list-music-item">
            <view class="list-music-top">
              1
            </view>
            <view class="list-music-song">
              <view class="">
                与我无关
              </view>
              <view class="">
                <image src="../../static/dujia.png"></image>
                <image src="../../static/sq.png"></image>
                阿冗 - 与我无关
              </view>
            </view>
            <text class="iconfont iconbofang"></text>
          </view>
          <view class="list-music-item">
            <view class="list-music-top">
              1
            </view>
            <view class="list-music-song">
              <view class="">
                与我无关
              </view>
              <view class="">
                <image src="../../static/dujia.png"></image>
                <image src="../../static/sq.png"></image>
                阿冗 - 与我无关
              </view>
            </view>
            <text class="iconfont iconbofang"></text>
          </view>
          <view class="list-music-item">
            <view class="list-music-top">
              1
            </view>
            <view class="list-music-song">
              <view class="">
                与我无关
              </view>
              <view class="">
                <image src="../../static/dujia.png"></image>
                <image src="../../static/sq.png"></image>
                阿冗 - 与我无关
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
  import { list } from '../../common/api.js'
  export default {
    data() {
      return {
        playlist: {
          coverImgUrl: '',
          creator: {
            avatarUrl: ''
          }
        }
      }
    },
    onLoad(options) {
      console.log(options.listId);
      list(options.listId).then((res) => {
        if(res[1].data.code === 200) {
          this.playlist = res[1].data.playlist
          
        }
      })
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
.list-share {
  width: 330rpx;
  height: 74rpx;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 37rpx;
  color: white;
  text-align: center;
  line-height: 74rpx;
  font-size: 28rpx;
}
.list-share text {
  margin-right: 16rpx;
}
.list-music {
  background-color: #fff;
  border-radius: 50rpx;
  margin-top: 40rpx;
  overflow: hidden;
}
.list-music-head {
  height: 50rpx;
  margin: 30rpx 0 70rpx 22rpx;
}
.list-music-head text:nth-child(1) {
  height: 50rpx;
  font-size: 50rpx;
  
}
.list-music-head text:nth-child(2) {
  font-size: 30rpx;
  margin: 0 10rpx 0 26rpx;
}
.list-music-head text:nth-child(3) {
  font-size: 26rpx;
  color: #b2b2b2;
}
.list-music-item {
  display: flex;
  margin: 0 32rpx 66rpx 46rpx;
  align-items: center;
  color: #959595;
  
}
.list-music-top {
  width: 58rpx;
  font-size: 30rpx;
  line-height: 30rpx;
}
.list-music-song {
  flex: 1;
}
.list-music-song view:nth-child(1) {
  font-size: 28rpx;
  color: black;
}
.list-music-song view:nth-child(2) {
  display: flex;
  font-size: 20rpx;
  align-items: center;
  
}
.list-music-song view:nth-child(2) image {
  width: 32rpx;
  height: 20rpx;
  margin-right: 10rpx;
}
.list-music-item text {
  font-size: 50rpx;
  color: #c7c7c7;
}
</style>
