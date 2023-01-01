<template>
	<view class="index">
    <musichead title="网易云音乐" :icon="false"></musichead>
    <view class="container">
      <scroll-view scroll-y="true" >
        <view class="index-search">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲" />
        </view>
      </scroll-view>
    </view>
	</view>
</template>

<script>
  import '@/common/iconfont.css';
  import musichead from '@/components/musichead/musichead.vue'
	export default {
    components: {
      musichead
    },
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
.index {
  
}
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
</style>
