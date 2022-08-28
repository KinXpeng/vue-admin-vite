import type { RouteRecordRaw } from 'vue-router'

import Layout from '~/layout/index.vue'

const pages: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/main',
		name: 'main',
		redirect: '/home',
		component: Layout,
		meta: {
			hidden: false,
			icon: 'charm:apps-plus',
			title: '工作台菜单'
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('~/pages/home/index.vue'),
				meta: {
					hidden: false,
					icon: 'charm:apps-plus',
					title: '主页'
				}
			}
		]
	},
	{
		path: '/a',
		redirect: '/a/a1',
		component: Layout,
		meta: {
			hidden: false,
			icon: 'charm:chart-line',
			title: '菜单A'
		},
		children: [
			{
				path: '/a/a1',
				name: 'A1',
				component: () => import('~/pages/A/a1.vue'),
				meta: {
					hidden: false,
					// icon: 'material-symbols:360',
					title: '子菜单A1',
					keepAlive: true
				}
			},
			{
				path: '/a/a2',
				name: 'A2',
				component: () => import('~/pages/A/a2.vue'),
				meta: {
					hidden: false,
					// icon: 'material-symbols:360',
					title: '子菜单A2'
				},
				children: [
					{
						path: '/a/a2/aa',
						name: 'A2',
						component: () => import('~/pages/A/a2.vue'),
						meta: {
							hidden: false,
							// icon: 'material-symbols:360',
							title: '子菜单A2'
						}
					}
				]
			}
		]
	},
	{
		path: '/b',
		name: 'B',
		component: Layout,
		meta: {
			hidden: false,
			icon: 'charm:nut',
			title: '菜单B'
		},
		children: [
			{
				path: '/b1',
				name: 'B',
				component: () => import('~/pages/B/b1.vue'),
				meta: {
					hidden: false,
					icon: 'charm:nut',
					title: '菜单B-1'
				}
			}
		]
	},

	{
		path: '/:page(.*)*',
		name: 'NotFound',
		component: () => import('~/pages/404/index.vue'),
		meta: {
			hidden: true
		}
	}
]

export default pages
