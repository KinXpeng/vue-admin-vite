export const useSettingStore = defineStore('North-setting', () => {
	const collapse = ref(false)

	return {
		collapse
	}
})

export const subscribeSettingStore = () => {
	const key = useSettingStore.$id + 'store'
	const instance = useSettingStore()

	instance.$subscribe((_, state) => sessionStorage.setItem(key, JSON.stringify(state)))

	const cache_state = sessionStorage.getItem(key)
	if (cache_state) instance.$state = JSON.parse(cache_state)
}
