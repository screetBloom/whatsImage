<template>
	<div class="test">
		<svg-dashboard :current-speed="currentSpeed" :level="level" class="svg_bg"></svg-dashboard>

		<div style="height: 80px;width: 100%"></div>

		<img src="" alt="">

	</div>
</template>

<style lang="less" type="text/less">

	.svg_bg {
		background-color: black;
	}

</style>

<script>
	import svgDashboard from '../components/dashboard.vue'

	import svgone from '../components/test.svg'

	export default {
		data() {
			return {
				currentSpeed: 5,
				level: 6
			}
		},
		mounted() {


			setInterval(function () {
				if (this.currentSpeed == (this.level - 1)) {
					this.currentSpeed = 0
				} else {
					this.currentSpeed++
				}
			}.bind(this), 1000)


		},
		watch: {},
		computed: {
			oneImg() {
				if (this.dateLevel == 1) {
					return oneImg;
				} else if (this.dateLevel == 2) {
					return twoImg;
				} else if (this.dateLevel == 3) {
					return threeImg;
				}
			},
		},
		methods: {


			selfAdaption() {
				function ShowSecondImg(v) {
					var rate, newX, newY, newW, newH = 0;   //表示图片相对窗口的缩放比例
					var imgW, imgH;
					var centerW = $(window).width() - $("#alarmQueue").width() - $("#presInfo").width() - 40;

					var centerH = $(window).height() - $("#detailedInfor").height() - 148;
					$("#imgBoxs").find("#second").remove();
					var img = $('<img/>', {src: v.First_frame_image_url, "id": "second"});//v.First_frame_image_url

					img.prependTo('#imgBoxs');

					imgW = img.width();
					imgH = img.height();
					//获取的参数
					var rectX = parseInt(v.facerect.x);
					var rectY = parseInt(v.facerect.y);
					var rectWidth = parseInt(v.facerect.w);
					var rectHeight = parseInt(v.facerect.h);
					// alert(v.facerect.x);

					//var i = (centerW / 16 - centerH / 9) > 0 ? 0 : 1;
					var i = (centerW / centerH - imgW / imgH ) > 0 ? 0 : 1;
					if (i == 1) {
						//如果窗口宽不长，高长。以宽为准。
						rate = imgW / centerW;
						var imgRateH = imgH / rate;  //img real rate height;
						newX = rectX / rate
						newY = rectY / rate;
						newW = rectWidth / rate;
						newH = rectHeight / rate;

						$("#imgBox").width(centerW);
						$("#imgBox").css("height", "100%");
						$("#second").css({"width": centerW, "height": imgRateH});
					}
					else if (i == 0) {
						//如果窗口宽足够长，高不长。以高为准。
						rate = centerH / imgH;
						var imgRateW = imgW * rate;  //img real rate width;
						var leftsideW = (centerW - imgRateW) / 2;    //leftside add rightside  width;
						newX = rectX * rate + leftsideW;
						newY = rectY * rate;
						newW = rectWidth * rate;
						newH = rectHeight * rate;

						$("#imgBox").height(centerH);
						$("#imgBox").css("width", "100%");
						$("#second").css({"width": imgRateW, "height": centerH});

					}
					// $("#detailedInfor").height($(".container").height()-centerH);
					$("#faceDiv").attr('style', 'display:block;top:' + newY + 'px;left:' + newX + 'px;width:' + newW + 'px;height:' + newH + 'px');

				}
			}


		},
		created() {

		},
		components: {
			svgDashboard
		},
	}
</script>
