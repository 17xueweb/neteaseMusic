<template>
  <view class="search">
    <musichead title="搜索" :icon="true" :iconblack="true"></musichead>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="search-search">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲" />
          <text class="iconfont iconguanbi"></text>
        </view>
        <view class="search-history">
          <view class="search-history-head">
            <text>历史记录</text>
            <text class="iconfont iconlajitong"></text>
          </view>
          <view class="search-history-list">
            <view>少年</view>
            <view>测试歌曲</view>
            <view>少年</view>
            <view>测试歌曲</view>
            <view>少年</view>
            <view>测试歌曲</view>
            <view>少年</view>
            <view>测试歌曲</view>
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
    components: {
      musichead
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style>
.search-search {
  display: flex;
  align-items: center;
  height: 70rpx;
  margin: 70rpx 30rpx 30rpx 30rpx;
  background-color: #f7f7f7;
  border-radius: 50rpx;
}
.search-search text {
  margin: 0 26rpx;
}
.search-search input {
  flex: 1;
  font-size: 26rpx;
}
.search-history {
  margin: 0 30rpx;
  font-size: 26rpx;
}
.search-history-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 36rpx;
  
}
.search-history-list {
  display: flex;
  flex-wrap: wrap;
}
.search-history-list view {
  padding: 16rpx 28rpx;
  border-radius: 40rpx;
  margin-right: 30rpx;
  margin-bottom: 30rpx;
  background-color: #f7f7f7;
}
</style>
