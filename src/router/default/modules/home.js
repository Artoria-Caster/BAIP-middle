//home的router
import formEditor from './formEditor'
import sopEditor from './sopEditor'

export default [
	{
		//首页
		path: '/',
		name: 'home',
		component: () => import('@/pages/default/home/Home.vue'),
		children: [
			{
				path:"",
				name:"homeView",
				component: () => import('@/pages/default/home/HomeView.vue'),
			},
			...formEditor,
			...sopEditor
		],
	},
]
