<template>
	<view>
		<button type="default" @click="handleLogin">login</button>
		<button type="default" @click="handleUserInfo">userInfo</button>
		<button type="default" @click="showToast">toast</button>
		<button type="default" @click="showModal">modal</button>
		<button type="default" @click="requestSubscribeMessage">requestSubscribeMessage</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

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
			}
		}
	}
</script>

<style lang="scss">

</style>
