<template>
	<div style="background-color: black">

		<div style="width: 100%;height: 70px"></div>

		<img :src="skeTon" alt="">


	</div>
</template>

<style>

</style>

<script>

	import skeTon from './skeleton.vue'

	export default {
		data() {
			return {}
		},
		mounted() {

		},
		watch: {},
		computed: {
			headerImg() {
				return skeTon;
			},
		},
		methods: {},
		created() {

		},
		components: {

		},
	}
</script>
