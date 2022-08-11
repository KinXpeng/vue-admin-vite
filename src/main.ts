import { createApp } from 'vue'
import type { App } from 'vue'
import Entry from './App.vue'
import { createPinia } from 'pinia'
import { setupRouter } from './router'
import { setupStyle } from './styles'

const application = async () => {
	const app: App = createApp(Entry)
	await setupStyle()
	await setupRouter(app)
	app.use(createPinia()).mount('#app')
}

application()
