/// <reference types="vite/client" />
import 'vue-router'
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	// const Component: ReturnType<typeof defineComponent>
	export default component
}

interface ImportMetaEnv {
	readonly VITE_APP_MODE: string
	readonly VITE_APP_TITLE: string
	readonly VITE_APP_API: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare module 'vue-router' {
	// 扩展 RouteMeta
	interface RouteMeta {
		title?: string
		icon?: string
		hidden?: boolean
		keepAlive?: boolean
		// activeMenu?: string
		// hideTab?: boolean
	}
}
