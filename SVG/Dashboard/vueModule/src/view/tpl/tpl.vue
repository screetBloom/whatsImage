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
				result: '',
				test: ''
			}
		},
		mounted() {

			let tpl =
				'<br>'+
				'this is a log file to relize my idea:' +
				'{{if(this.showSkills) {}}' +
				'{{for(var index in this.skills) {}}' +
				'<br>' +
				'<a href="#mytpl">{{this.skills[index]}}</a>' +
				'<br>{{this.text}}<br>' +
				'{{}}}' +
				'{{} else {}}' +
				'<p>none</p>' +
				'{{}}}'+
				'<br><br><br><br><br>'+
				'{{this.endInfo.context}}'

			let data = {
				skills: ["js大锤", "html左右", "css旁白"],
				showSkills: true,
				text:'金角大葫芦娃',
				endInfo:{
					context:'引脚大大王-_-'
				}
			}

			this.result = this.TemplateEngine(tpl, data)

		},
		watch: {},
		computed: {},
		methods: {
			TemplateEngine(tpl, options) {
				var reg = /{{([\s\S]+?}*)}}/g,
					reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
					code = 'var r=[];\n',
					cursor = 0,
					match;

				/*
				1.  add函数 如果JS代码以if, for, else, switch, case, break, { , }这些内容为起始值,
				则直接添加该行代码, 不添加到数组中
				2.  如果不是if、for等关键词，直接添加，但是添加时，对双引号进行替换，全部替换成\"
				*/
				var add = function (line, js) {
					js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
						(code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
					return add;
				}

				while (match = reg.exec(tpl)) {
					/*
					遍历传递过来的字符串，对字符串进行处理生成函数体字符串
					1.  第一个add函数对关键词所在句子之前的普通句子进行添加处理
					2.  返回的add函数对关键词所在句子进行添加处理
					3.  游标推进
					*/
					add(tpl.slice(cursor, match.index))(match[1], true);
					cursor = match.index + match[0].length
				}
				/*
				本次add函数调用可以删除
				*/
				add(tpl.substr(cursor, tpl.length - cursor))
				code += 'return r.join("");'

				return new Function(code.replace(/[\r\t\n]/g, '')).apply(options)

			}

		},
		created() {

		},
		components: {

		},
	}
</script>
