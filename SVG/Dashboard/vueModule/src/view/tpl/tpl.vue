<template>
	<div>
		<div v-html="result"></div>


	</div>
</template>

<style>

</style>

<script>

	export default {
		data() {
			return {
				result:'',
				test:''
			}
		},
		mounted() {

			let template =
				'My skills:' +
				'{{if(this.showSkills) {}}' +
				'{{for(var index in this.skills) {}}' +
				'<br>'+
				'<a href="#mytpl">{{this.skills[index]}}</a>' +
				'<br>'+
				'{{}}}' +
				'{{} else {}}' +
				'<p>none</p>' +
				'{{}}}'

			let data = {
				skills: ["js大锤", "html左右", "css旁白"],
				showSkills: true
			}

			this.result = this.TemplateEngine(template, data)
//			console.log(this.TemplateEngine(template, {
//				skills: ["js大锤", "html左右", "css旁白"],
//				showSkills: true
//			}));

		},
		watch: {},
		computed: {},
		methods: {
			TemplateEngine(html,options){
				let reg = /{{(.+?)}}/g ,
					reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
					code = 'var r=[];\n',
					cursor = 0,
					match;

				/*
				上述代码添加了一个新的正则表达式, 如果JS代码以if, for, else, switch, case, break, { , }这些内容为起始值,
				则直接添加该行代码, 不添加到数组中
				*/
				var add = function(line, js) {
					js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
						(code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
					return add;
				}

				while(match = reg.exec(html)) {
					console.log(cursor,'cursor <<  ',match.index,'match.index << ',html.slice(cursor, match.index))
					console.log(9999999999999)
					add(html.slice(cursor, match.index))(match[1], true);
					cursor = match.index + match[0].length
				}
				add(html.substr(cursor, html.length - cursor))
				code += 'return r.join("");'

				return new Function(code.replace(/[\r\t\n]/g, '')).apply(options)

			}

		},
		created() {

		},
		components: {},
	}
</script>
