<template>
	<div>
sdfsdfsdfsdfdsfsd
		<br>
		<br>
		<div style="height: 80px;width: 100%;background-color: #42b983"></div>
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
			let template =
				'My skills:' +
				'{{if(this.showSkills) {}}' +
				'{{for(var index in this.skills) {}}' +
				'<br>'+
				'<a href="#test">{{this.skills[index]}}</a>' +
				'<br>'+
				'{{}}}' +
				'{{} else {}}' +
				'<p>none</p>' +
				'{{}}}';




		},
		watch: {},
		computed: {

		},
		methods: {

		},
		created() {

		},
		components: {},
	}
</script>
