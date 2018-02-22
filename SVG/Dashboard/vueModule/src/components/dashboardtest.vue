<template>
	<svg
		height="100%"
		width="100%"
		viewBox="0 0 198 154"
		class="cps-dashboard"
	>
		<!-- svg内容区，这里包裹一层是为了方便整体平移 -->
		<g class="container">
			<!-- 基础路径部分 -->
			<circle
				cx="250"
				cy="250"
				r="100"
				stroke-width="14"
				stroke-linecap="round"
				fill="none"
				stroke-dasharray="420 630"
				class="container_path"
			>
			</circle>
			<!-- 旋转进度部分 -->
			<g>
				<circle
					:style="{'stroke-dasharray':''+lineData+' 630'}"
					cx="250"
					cy="250"
					r="100"
					stroke-width="14"
					stroke-linecap="round"
					fill="none"
					ref="test"
					class="container_progress"
				>
				</circle>
				<circle
					:style="{'transform':'rotate3d(0,0,1,'+circleData+'deg)','-webkit-transform':'rotate3d(0,0,1,'+circleData+'deg)'}"
					cx="250"
					cy="250"
					r="100"
					stroke-width="6"
					stroke-linecap="round"
					fill="none"
					stroke-dasharray="0 630"
					class="container_progressCircle"
				>
				</circle>
			</g>
			<!-- 刻度线部分 -->
			<g class="container_line">
				<!-- 大刻度线条,旋转做法  -->
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item01"/>
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item02"/>
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item03"/>
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item04"/>
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item05"/>
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item06 "/>
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item07"/>
				<line x1="182" y1="268" x2="175" y2="270" class="container_line_item08"/>

				<!-- 小刻度线，旋转做法 -->
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY01 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY02 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY03 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY04 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY05 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY06 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY07 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY08 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY09 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY10 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY11 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY12 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY13 itemY"/>
				<line x1="182" y1="259" x2="175" y2="259" class="container_line_itemY14 itemY"/>

			</g>
			<!-- 指针部分 -->
			<g :style="{'transform':'rotate3d(0,0,1,'+pointData+'deg)','-webkit-transform':'rotate3d(0,0,1,'+pointData+'deg)'}" class="container_point">
				<circle
					cx="244"
					cy="260"
					r="13"
					fill="rgb(228,229,237)"
				>
				</circle>
				<path
					d="M 240 208 l-5 52 a8 8 180 0 0 16 0 l-5 -52 a3 3 180 0 0 -6 0" class="container_point_path"></path>
				<circle
					cx="243"
					cy="261"
					r="3"
					fill="rgb(228,229,237)"
				>
				</circle>
			</g>
		</g>
	</svg>
</template>

<style lang="less" type="text/less" scoped>
	.cps-dashboard {
		.container {
			transform: translate(-140px, -140px);

			&_path {
				stroke: rgb(228, 229, 237);
				transform: rotate(150deg);
				transform-origin: 250px 250px;
			}

			&_progress {
				stroke: red;

				transition: all 1s;
				transform: rotate(150deg);
				transform-origin: 250px 250px;
			}
			&_progressCircle {
				stroke: rgb(228, 229, 237);

				transition: all 1s;
				transform-origin: 250px 250px;
			}
			&_line {
				&_item01 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
				}
				&_item02 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
					transform-origin: 250px 250px;
					transform: rotate(30deg);
				}
				&_item03 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
					transform-origin: 250px 250px;
					transform: rotate(60deg);
				}
				&_item04 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
					transform-origin: 250px 250px;
					transform: rotate(90deg);
				}
				&_item05 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
					transform-origin: 250px 250px;
					transform: rotate(120deg);
				}
				&_item06 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
					transform-origin: 250px 250px;
					transform: rotate(150deg);
				}
				&_item07 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
					transform-origin: 250px 250px;
					transform: rotate(180deg);
				}
				&_item08 {
					stroke: rgb(210, 211, 220);
					stroke-width: 2;
					transform-origin: 250px 250px;
					transform: rotate(210deg);
				}

				.itemY {
					stroke: rgb(228, 229, 237);
					stroke-width: 1;
					transform-origin: 250px 250px;
				}
				&_itemY01 {
					transform: rotate(2deg);
				}
				&_itemY02 {
					transform: rotate(12deg);
				}
				&_itemY03 {
					transform: rotate(32deg);
				}
				&_itemY04 {
					transform: rotate(42deg);
				}
				&_itemY05 {
					transform: rotate(62deg);
				}
				&_itemY06 {
					transform: rotate(72deg);
				}
				&_itemY07 {
					transform: rotate(92deg);
				}
				&_itemY08 {
					transform: rotate(102deg);
				}
				&_itemY09 {
					transform: rotate(122deg);
				}
				&_itemY10 {
					transform: rotate(132deg);
				}
				&_itemY11 {
					transform: rotate(152deg);
				}
				&_itemY12 {
					transform: rotate(162deg);
				}
				&_itemY13 {
					transform: rotate(182deg);
				}
				&_itemY14 {
					transform: rotate(192deg);
				}
			}
			&_point {
				transform-origin: 244px 260px;
				transition: all 1s;
				&_path {
					fill: blue;

				}
			}
		}
	}
</style>

<script>
	export default {
		name: "cps-dashboard",
		props: {
			currentSpeed: {
				type: [Number, String],
				default: 1
			},
			level: {
				type: [Number, String],
				default: 5
			},
		},
		data() {
			return {
				// 仪表盘起点
				beginData: {
					line: 10,
					circle: 156,
					point: -110
				},
				// 仪表盘重点
				endData: {
					line: 420,
					circle: 390,
					point: 114
				}
			}
		},
		computed: {
			lineData() {
				return this.initialValue[this.currentSpeed].line;
			},
			circleData() {
				return this.initialValue[this.currentSpeed].circle;
			},
			pointData() {
				return this.initialValue[this.currentSpeed].point;
			},
			initialValue(){
				let arr = [],segment,divisor = this.level-1 ;
				for(let i=0;i<this.level;i++){
					segment = {
						line: ((this.endData.line - this.beginData.line)/divisor).toFixed(2),
						circle: ((this.endData.circle - this.beginData.circle)/divisor).toFixed(2),
						point: ((this.endData.point - this.beginData.point)/divisor).toFixed(2),
					}
					let item = {
						line: this.beginData.line + (segment.line*i),
						circle: this.beginData.circle + (segment.circle*i),
						point: this.beginData.point + (segment.point*i),
					}
					arr.push(item)
				}
				return arr
			}
		},
		methods: {}
	};
</script>
