import type { ElButton } from 'element-plus'
import AuthButton from '~/components/AuthButton.vue'

declare module 'vue' {
	export interface GlobalComponents {
		AuthButton: typeof AuthButton & typeof ElButton
	}
}

declare global {
	const ElMessage: typeof import('element-plus/es')['ElMessage']
}
