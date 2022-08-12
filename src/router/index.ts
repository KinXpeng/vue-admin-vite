import type { App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import nprogress from 'nprogress'
import routes from './modules'

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	nprogress.start()
	next()
})

router.afterEach((to, from) => {
	nprogress.done()
})

export async function setupRouter(app: App) {
	app.use(router)
}
