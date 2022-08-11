import type { Ref } from 'vue'

interface ITab {
	title: string
	path: string
}

export const useTabsStore = defineStore('North-tabs', () => {
	const tabsList: Ref<Array<ITab>> = ref([])

	const addTabs = (payload: ITab) => {
		if (tabsList.value.some((item) => item.path === payload.path)) return
		tabsList.value.push(payload)
	}

	const removeTab = (path: string): string => {
		let tabIndex = -1

		tabsList.value.forEach((item, index) => {
			if (item.path === path) tabIndex = index
		})
		if (tabsList.value.length > 1) {
			const jumpPath = tabsList.value[tabIndex + 1] || tabsList.value[tabIndex - 1]
			tabsList.value = tabsList.value.filter((item) => item.path !== path)
			return jumpPath.path
		} else {
			tabsList.value = tabsList.value.filter((item) => item.path !== path)
			return '/'
		}
	}

	return {
		tabsList,
		addTabs,
		removeTab
	}
})

// 缓存tabs数据
export const subscribeTabsStore = () => {
	const instance = useTabsStore()
	const key = instance.$id + '-store'
	instance.$subscribe((_, state) => sessionStorage.setItem(key, JSON.stringify({ ...state })), { detached: true })

	const cache_state = sessionStorage.getItem(key)
	if (cache_state) instance.$state = JSON.parse(cache_state)
}
