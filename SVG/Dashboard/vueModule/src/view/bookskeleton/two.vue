
<template>
	<div class="skeleton-box">
		<div class="skeleton-box-st"></div>
		<div class="skeleton-box-nd"></div>
		<div class="skeleton-box-rd"></div>
		<div class="skeleton-box-4th"></div>
		<div class="skeleton-box-5th"></div>
		<div class="skeleton-box-5th"></div>

		<div class="skeleton-box-6th"></div>
	</div>
</template>

<style lang="less" type="text/less">

	.skeleton-box{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(242,244,247);
		z-index: 10;

		&-st{
			height: 144px;
			background: data-uri(
				"image/svg+xml;charset=UTF-8",
				"./skeleton_svg/svg01.svg"
			);
			background-size: 100% auto;
		}
		&-nd{
			height: 108px;
			background: data-uri(
				"image/svg+xml;charset=UTF-8",
				"./skeleton_svg/svg02.svg"
			);
			background-size: 100% auto;
		}
		&-rd{
			height: 132px;
			background: data-uri(
				"image/svg+xml;charset=UTF-8",
				"./skeleton_svg/svg03.svg"
			);
			background-size: 100% auto;
		}
		&-4th{
			height: 76px;
			background: data-uri(
				"image/svg+xml;charset=UTF-8",
				"./skeleton_svg/svg04.svg"
			);
			background-size: 100% auto;
		}
		&-5th{
			height: 61px;
			background: data-uri(
				"image/svg+xml;charset=UTF-8",
				"./skeleton_svg/svg05.svg"
			);
			background-size: 100% auto;
		}


		&-6th{
			height: 55px;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			background: data-uri(
				"image/svg+xml;charset=UTF-8",
				"./skeleton_svg/svg06.svg"
			);
			background-size: 100% auto;
		}
	}



</style>

<script>

	export default {
		data() {
			return {}
		},
		mounted() {

		},
		watch: {},
		computed: {},
		methods: {},
		created() {

		},
		components: {},
	}
</script>
