<template>
	<view class="list">
		<view class="index">{{ index }}</view>
		<button v-for="(item, index) in list" @click="handleClick(item)">{{ item.key }}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				list: [{
						key: '微信api',
						url: '/pages/subPackages/index/wx-api/wx-api'
					},
					{
						key: 'wxs',
						url: '/pages/subPackages/index/wxs/wxs'
					},
					{
						key: '同层渲染',
						url: '/pages/subPackages/index/native/native'
					},
					{
						key: '自定义组件',
						url: '/pages/subPackages/index/component/component'
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
	.index {
		text-align: center;
	}
	.list {
		padding: 30rpx;
		box-sizing: border-box;
	}
</style>
