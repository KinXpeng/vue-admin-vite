import type { Ref } from 'vue'

const media = window.matchMedia('(prefers-color-scheme: dark)')
const dark: Ref<boolean> = ref(media.matches)

export const useDark = () => {
	const key = 'North-theme'

	const update = () => {
		dark.value = media.matches
		dark.value ? setDark() : removeDark()
	}

	const init = () => {
		const cacheTheme = window.localStorage.getItem(key) ?? ''
		if (!cacheTheme) return

		nextTick(() => {
			cacheTheme === 'dark' ? setDark() : removeDark()
		})
	}
	init()

	const setDark = () => {
		dark.value = true
		window.localStorage.setItem(key, 'dark')
		document.documentElement.classList.toggle('dark', true)
	}
	const removeDark = () => {
		dark.value = false
		window.localStorage.setItem(key, 'light')
		document.documentElement.removeAttribute('class')
	}

	media.addEventListener('change', update)
	onUnmounted(() => media.removeEventListener('change', update))

	return {
		dark,
		setDark,
		removeDark
	}
}
