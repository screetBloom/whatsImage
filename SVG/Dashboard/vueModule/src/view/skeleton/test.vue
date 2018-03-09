<template>
	<div>

		<svg
			height="500"
			width="500"
			viewBox="0 0 500 500"
		>

			<g class="face">

				<!--左边脸颊-->
				<path
					stroke="black"
					stroke-width="6"
					d="M0 50 l0 100"
				>
				</path>
				<!--左边下巴-->
				<path
					stroke="black"
					stroke-width="6"
					d="M0,150 C10,165 35,190 50,200"
				>
				</path>
				<!-- 嘴巴 -->
				<g class="mouth">
					<path
						fill="none"
						stroke="black"
						stroke-width="6"
						d="M50,200 l15 -30 h30 l15 30"
					>
					</path>
					<path
						fill="none"
						stroke="black"
						stroke-width="6"
						d="M104,188 h-48"
					>
					</path>

				</g>
				<!-- 右边下巴、右边脸颊 -->
				<path
					fill="none"
					stroke="black"
					stroke-width="6"
					d="M110,200 C125,190 140,175 160,150 v-100"
				>
				</path>
				<!--头部-->
				<path
					fill="none"
					stroke="black"
					stroke-width="6"
					d="M160,50 l-50 -40 h-60 l-50 40"
				></path>

				<!-- 眼睛 -->
				<g class="eyes">
					<rect x="30" y="85" rx="3" ry="3" stroke="#000" stroke-width="6" width="30" height="30" fill="DarkOrange"></rect>
					<rect x="90" y="85" rx="3" ry="3" stroke="#000" stroke-width="6" width="30" height="30" fill="DarkOrange"></rect>
				</g>

			</g>

		</svg>

	</div>
</template>

<style>

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
