<template>
	<view>
		<button type="default" @click="handleLogin">login</button>
		<button type="default" @click="handleUserInfo">userInfo</button>
		<button type="default" @click="showToast">toast</button>
		<button type="default" @click="showModal">modal</button>
		<button type="default" @click="requestSubscribeMessage">requestSubscribeMessage</button>
		<button type="default" @click="handleAdd">修改上一个页面的数据</button>
		<input id="input" type="text" v-model="inputValue" />
		<view class="text-model">
			{{ inputValue }}
		</view>
		<button type="default" @click="handleSetStorage">设置缓存</button>
		<button type="default" @click="handleGetStorage">获取缓存</button>
		<button type="default" @click="handleGetElementInfo">获取input元素信息</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: ""
			};
		},
		onLoad() {
			console.log('onLoad')
		},
		onPullDownRefresh() {
			setTimeout(() => {
				console.log('onPullDownRefresh')
				uni.stopPullDownRefresh();
			}, 1000)
		},
		methods: {
			handleLogin(e) {
				uni.login({
					success: (e) => {
						console.log('success:', e)
						uni.showModal({
							title: '成功提示',
							content: JSON.stringify(e)
						})
					},
					fail: (e) => {
						console.log('err:', e)
						uni.showModal({
							title: '错误提示',
							content: JSON.stringify(e)
						})
					}
				})
			},
			handleUserInfo(e) {
				uni.getUserInfo({
					success: (e) => {
						console.log('success:', e)
						uni.showModal({
							title: '成功提示',
							content: JSON.stringify(e)
						})
					},
					fail: (e) => {
						console.log('err:', e)
						uni.showModal({
							title: '错误提示',
							content: JSON.stringify(e)
						})
					}
				})
			},
			showToast() {
				uni.showToast({
					title: '标题',
					icon: 'none',
					duration: 2000
				});
			},
			showModal() {
				uni.showModal({
					title: '提示',
					content: 'hello world'
				})
			},
			requestSubscribeMessage() {
				uni.requestSubscribeMessage({
					tmplIds: ['lDQsf59OwXf1bkfmo1-ubbzjjNNFC8xzh4CFyByQk60'],
					success: (res) => {
						console.log('success:', res)
					},
					fail: (err) => {
						console.log('err:', err)
					}
				})
			},
			handleAdd() {
				const pages = getCurrentPages()
				const page = pages[0]
				page.$vm.index++
			},
			handleSetStorage() {
				uni.setStorage({
					key: 'inputValue',
					data: this.inputValue
				})
			},
			handleGetStorage() {
				uni.getStorage({
					key: 'inputValue',
					success: function(res) {
						uni.showToast({
							title: res.data,
							icon: 'none',
							duration: 2000
						});
					}
				});
			},
			handleGetElementInfo() {
				uni
					.createSelectorQuery()
					.select('#input')
					.boundingClientRect(function(e) {
						console.log(e)
						uni.showModal({
							title: 'input元素信息',
							content: JSON.stringify(e)
						})
					})
					.exec()
			},
		}
	}
</script>

<style lang="scss">
	input {
		margin: 30rpx;
		padding: 20rpx;
		background-color: #CCCCCC;
		box-sizing: border-box;
		border-radius: 10rpx;
		line-height: 100rpx;
		min-height: 100rpx;
	}

	.text-model {
		margin: 30rpx;
		min-height: 48rpx;
		line-height: 48rpx;
	}
</style>
