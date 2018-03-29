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
		},
		{
			path: '/router',
			name: 'router',
			component: (resolve) => require(['@/view/router/rou'], resolve)
		},
		{
			path: '/skeleton',
			name: 'skeleton',
			component: (resolve) => require(['@/view/skeleton/skeleton'], resolve)
		},
		{
			path: '/ske',
			name: 'ske',
			component: (resolve) => require(['@/view/skeleton/ske'], resolve)
		},
		{
			path: '/iron',
			name: 'iron',
			component: (resolve) => require(['@/view/skeleton/test'], resolve)
		},
		{
			path: '/bookske',
			name: 'bookske',
			component: (resolve) => require(['@/view/bookskeleton/one'], resolve)
		},
		{
			path: '/bookske2',
			name: 'bookske2',
			component: (resolve) => require(['@/view/bookskeleton/two'], resolve)
		},
    {
      path: '/calender',
      name: 'calender',
      component: (resolve) => require(['@/view/calender/calender2'], resolve)
    }
	]
})
