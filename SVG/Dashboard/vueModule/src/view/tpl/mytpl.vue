<template>
	<div>
sdfsdfsdfsdfdsfsd
		<br>
		<br>
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

			this.test(template)
			console.log(template)






		},
		watch: {},
		computed: {

		},
		methods: {

			test(index){
				for(let i=0;i<index.length;i++){
//					index[i]='?>'
					console.log(index.length)
					console.log(index[0],index[i])
					index[i]='?'


				}
//				console.log(index)
			}

		},
		created() {

		},
		components: {},
	}
</script>
