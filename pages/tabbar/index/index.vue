<template>
	<view class="list">
		<button v-for="(item, index) in list" @click="handleClick(item)">{{ item.key }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						key: '微信api',
						url: '/pages/subPackages/index/wx-api/wx-api'
					},
					{
						key: 'wxs',
						url: '/pages/subPackages/index/wxs/wxs'
					}
				]
			};
		},

		methods: {
			handleClick(row) {
				uni.navigateTo({
					url: row.url
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		padding: 30rpx;
		box-sizing: border-box;
	}
</style>
