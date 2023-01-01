<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  .container {
    width: 100%;
    /* 可视高度减去头部 因为头部不需要滚动 */
    height: calc(100vh - 70px);
    overflow: hidden;
  }
  .container scroll-view {
    height: 100%;
  }
</style>
