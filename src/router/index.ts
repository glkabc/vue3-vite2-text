import { createRouter, createWebHistory, RouteLocationRaw } from 'vue-router'

const routes =[
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home.vue'),
		children: [
			{
				path: '',
				redirect: 'about',
			},
			{
				path: 'about',
				component: () => import('@/components/about.vue')
			},
			{
				path: 'one',
				component: () => import('@/views/userOne.vue')
			},
			{
				path: 'user',
				component: () => import('@/views/user.vue')
			},
		]
	},
	{
		path: '/about/:id?',
		name: 'about',
		component: () => import('@/components/about.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('@/views/404.vue')
	},
] 
const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from) => {
	console.log(to, from)
})

export default router