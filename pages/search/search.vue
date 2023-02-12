<template>
  <view class="search">
    <musichead title="搜索" :icon="true" :iconblack="true"></musichead>
    <view class="container" v-show="!isLoading">
      <scroll-view scroll-y="true">
        <view class="search-search">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲" />
          <text class="iconfont iconguanbi"></text>
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
</style>
