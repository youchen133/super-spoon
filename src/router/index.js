// route/index.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.NODE_ENV === 'production' ? '/vue-webpack-project/' : '/',
	routes: [
		{
			path: '/',
			name: 'HelloVue',
			component: () =>
				import(/* webpackChunkName: "HelloVue" */ '../views/HelloWorld') // webpack魔法注释设置chunkName，代码分割，按需引入
		},
		{
			path: '/test',
			name: 'Test',
			component: () => import(/* webpackChunkName: "Test" */ '../views/test')
		}
	]
})
