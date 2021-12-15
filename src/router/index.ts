import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('../views/home.vue'),
			children: [
				{
					path: 'user',
					name: 'user',
					component: () => import('../views/user.vue')
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../components/about.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/login.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404',
			component: () => import('../views/404.vue')
		},
	]

})

router.beforeEach((to, from) => {
	console.log(to, from)
})

export default router