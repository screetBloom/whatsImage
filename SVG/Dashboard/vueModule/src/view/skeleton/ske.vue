<template>
	<div style="background-color: black">



		<div style="height: 50px;width: 100%"></div>



		<!--<svg style="height:0;width:0;display:none;" version="1.1" xmlns="http://www.w3.org/2000/svg">-->
			<!--<symbol id="icon-italy" width="150" height="100" viewBox="0 0 3 2">-->
				<!--<rect width="1" height="2" x="0" fill="#008d46" />-->
				<!--<rect width="1" height="2" x="1" fill="#ffffff" />-->
				<!--<rect width="1" height="2" x="2" fill="#d2232c" />-->
			<!--</symbol>-->

			<!--<symbol id="icon-france" width="150" height="100" viewBox="0 0 3 2">-->
				<!--<rect width="1" height="2" x="0" fill="#002496" />-->
				<!--<rect width="1" height="2" x="1" fill="#ffffff" />-->
				<!--<rect width="1" height="2" x="2" fill="#ee2839" />-->
			<!--</symbol>-->
		<!--</svg>-->

		<!--<svg><use xlink:href="#icon-italy"/></svg>-->






		<div style="width: 375px;height: 1150px" class="test"></div>
	</div>
</template>

<style lang="less" type="text/less">

	@test-svg:"data:image/svg+xml,%3Csvg height='115' width='375' viewBox='0 0 375 115' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Crect x='5' y='2.5' rx='2' ry='2' width='365' height='110' style='fill:rgb%28255,255,255%29;stroke:none;'/%3E%3Crect x='25' y='25' width='62' height='18' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='25' y='55' width='69' height='13' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='25' y='92' width='110' height='10' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='127' y='32' width='40' height='10' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='114' y='46' width='67' height='6' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='135' y='56' width='25' height='10' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='210' y='25' width='63' height='18' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='203' y='55' width='69' height='13' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='297' y='28' width='56' height='15' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3Crect x='297' y='53' width='55' height='14' style='fill:rgb%28245,245,245%29;stroke:none;'/%3E%3C/svg%3E";



	.test{
		background-image: url(@test-svg);
		background-size: 375px 115px;
		background-repeat: repeat;

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
		computed: {

		},
		methods: {},
		created() {

		},
		components: {

		},
	}
</script>
