<template>
  <view class="index">
    <musichead title="网易云音乐" :icon="false"></musichead>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="index-search" @tap="handleToSearch">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲" />
        </view>
        <view class="index-list">
          <!--       <view class="index-list-item">
            <view class="index-list-img">
              <image src="../../static/wangyiyunyinyue.png"></image>
              <text>每天更新</text>
            </view>
            <view class="index-list-text">
              <view class="">
                1.与我无关 - 阿如
              </view>
              <view class="">
                1.与我无关 - 阿如
              </view>
              <view class="">
                1.与我无关 - 阿如
              </view>
            </view>
          </view> -->
          <!--     <view class="index-list-item">
            <view class="index-list-img">
              <image src="../../static/wangyiyunyinyue.png"></image>
              <text>每天更新</text>
            </view>
            <view class="index-list-text">
              <view class="">
                1.与我无关 - 阿如
              </view>
              <view class="">
                1.与我无关 - 阿如
              </view>
              <view class="">
                1.与我无关 - 阿如
              </view>
            </view>
          </view> -->
          <view class="index-list-item" 
            v-for="(item, index) in topList" 
            :key="index" 
            @tap="handleToList(item.listId)">
            <view class="index-list-img">
              <image :src="item.coverImgUrl"></image>
              <text>{{item.updateFrequency}}</text>
            </view>
            <view class="index-list-text">
              <view v-for="(item, index) in item.tracks" :key="index">
                {{index+1}}.{{item.first}} - {{item.second}}
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import '@/common/iconfont.css';
  import musichead from '@/components/musichead/musichead.vue'
  import mForSkeleton from "@/components/m-for-skeleton/m-for-skeleton"
  import {
    topList
  } from '../../common/api.js'
  export default {
    components: {
      musichead,
      mForSkeleton
    },
    data() {
      return {
        topList: []
      }
    },
    onLoad() {
      topList().then((res) => {
        if (res.length) {
          // second文字太长，截取一部分
          res.forEach(item => {
            item.tracks.forEach(tracksItem => {
              if ((tracksItem.first.length + tracksItem.second.length)  > 20) {
                tracksItem.second = tracksItem.second.substr(0, 5) + '...'
              }
            })
          })
          
          // debugger
          this.topList = res
        }
        console.log(res);
      })
    },
    methods: {
      handleToList(listId) {
        uni.navigateTo({
          url: "/pages/list/list?listId=" + listId
        })
      },
      handleToSearch() {
        uni.navigateTo({
          url: "/pages/search/search"
        })
      }
    }
  }
</script>

<style scoped>
  .index {}

  .index-search {
    display: flex;
    align-items: center;
    height: 70rpx;
    margin: 70rpx 30rpx 30rpx 30rpx;
    background-color: #f7f7f7;
    border-radius: 50rpx;
  }

  .index-search text {
    font-size: 26rpx;
    margin-right: 26rpx;
    margin-left: 28rpx;
  }

  .index-search input {
    font-size: 28rpx;
    flex: 1;
  }

  .index-list {
    margin: 0 30rpx;
  }

  .index-list-item {
    display: flex;
    margin-bottom: 34rpx;
  }

  .index-list-img {
    width: 212rpx;
    height: 212rpx;
    position: relative;
    border-radius: 30rpx;
    overflow: hidden;
    margin-right: 22rpx;
  }

  .index-list-img image {
    width: 100%;
    height: 100%;
  }

  .index-list-img text {
    position: absolute;
    left: 12rpx;
    bottom: 16rpx;
    color: #fff;
    font-size: 20rpx;
  }

  .index-list-text {
    font-size: 24rpx;
    line-height: 66rpx;
  }
</style>
