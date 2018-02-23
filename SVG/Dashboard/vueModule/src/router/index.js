import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/tpl',
			name: 'tpl',
			component: (resolve) => require(['@/view/tpl/tpl'], resolve)
		},
		{
			path: '/mytpl',
			name: 'mytpl',
			component: (resolve) => require(['@/view/tpl/mytpl'], resolve)
		},
		{
			path: '/test',
			name: 'test',
			component: (resolve) => require(['@/view/test'], resolve)
		}
	]
})
