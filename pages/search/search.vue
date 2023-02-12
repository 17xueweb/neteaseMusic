<template>
  <view class="search">
    <musichead title="搜索" :icon="true" :iconblack="true"></musichead>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="search-search">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲"  v-model="searchWord"/>
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
        <view class="search-hot">
          <view class="search-hot-head">
            热搜榜
          </view>
          
          <view class="search-hot-item" v-for="(item, index) in searchHot" :key="index" @tap="handleToWord(item.searchWord)">
            <view class="search-hot-top">
              {{index + 1}}
            </view>
            <view class="search-hot-word">
              <view class="">
                {{item.searchWord}} <image :src="item.iconUrl" mode="aspectFit"></image>
              </view>
              <view class="">
                {{ item.content }}
              </view>
            </view>
            <text class="search-hot-count">{{item.score}}</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import musichead from '@/components/musichead/musichead.vue'
  import '@/common/iconfont.css';
  import { searchHot, searchWord, searchSuggest} from '../../common/api.js'
  export default {
    components: {
      musichead
    },
    data() {
      return {
        searchHot: [],
        searchWord: ''
      }
    },
    onLoad() {
      searchHot().then((res) => {
        if(res[1].data.code === 200) {
          this.searchHot = res[1].data.data
        }
      })
    },
    methods: {
      handleToWord(word) {
        this.searchWord = word
      }
    }
  }
</script>

<style>
.search-search {
  display: flex;
  align-items: center;
  height: 70rpx;
  margin: 70rpx 30rpx 50rpx 30rpx;
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
  margin: 0rpx 30rpx 50rpx 30rpx;
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
.search-hot {
  margin: 0 30rpx;
  font-size: 26rpx;
}
.search-hot-head {
  margin-bottom: 36rpx;
}
.search-hot-item {
  display: flex;
  align-items: center;
  margin-bottom: 58rpx;
}
.search-hot-top {
  color: #fb2222;
  width: 60rpx;
  margin-left: 8rpx;
}
.search-hot-word {
  flex: 1;
}
.search-hot-word view:nth-child(1) {
  font-size: 30rpx;
  color: black;
}
.search-hot-word view:nth-child(2) {
  font-size: 24rpx;
  color: #878787;
}
.search-hot-word image {
  width: 48rpx;
  height: 22rpx;
}
.search-hot-count {
  color: #878787;
}
</style>
