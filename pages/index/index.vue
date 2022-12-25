<template>
	<view class="index">
    <musichead title="网易云音乐" :icon="false"></musichead>
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
</style>
