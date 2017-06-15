import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import subCategory from '@/pages/subCategory'
import content from '@/pages/content'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'main',
			component: main
		},
		{
			path: '/subCategory/:categoryname',
			name: 'subCategory',
			component: subCategory,
		},
		{
			path: '/subCategory/:categoryname/:contentname',
			name: 'content',
			component: content,
		}
	]
})
