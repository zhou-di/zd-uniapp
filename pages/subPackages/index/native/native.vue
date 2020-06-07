<template>
	<view class="container">
		<!-- <video :src="src"></video> -->
		<textarea value="" placeholder-style="color: #ff5257;" placeholder="点击输入..." />
		<!-- <cover-view class="mask"></cover-view> -->
		<view class="mask"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "https://media.yitong.com/mp-eqiq/classroom/video/free-video.mp4"
			};
		}
	}
</script>

<style lang="scss">
	video {
		width: 80%;
		height: 500rpx;
	}
	
	.container {
		display: flex;
	}
	
	textarea {
		// width: 100%;
		display: block;
		margin: 20rpx;
		border-radius: 20rpx;
		height: 500rpx;
		background-color: #f4f4f4;
		padding: 30rpx;
		box-sizing: border-box;
		flex: 1;
	}

	.mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #000000;
		opacity: 0.3;
	}
</style>
