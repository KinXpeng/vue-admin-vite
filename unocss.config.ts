import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
	shortcuts: {
		'flex-center': 'flex items-center justify-center',
		'flex-end': 'flex items-center justify-end',
		'bg-base': 'bg-white dark:bg-dark',
		'text-base': 'text-black dark:text-white',
		'shadow-base': 'border-x-slate-50 shadow-md dark:shadow-slate-300/10'
	},
	theme: {},
	presets: [presetUno(), presetAttributify(), presetIcons()]
})
