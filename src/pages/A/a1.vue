<template>
	<div>
		<auth-button auth="add" @auth-click="(fun) => handleClick(fun, 123)"></auth-button>
	</div>
</template>

<script setup lang="ts">
import { fetchCartAll } from '~/api'
import { useCRUD, usePage } from '~/hooks'

const { _on, list } = useCRUD<string>({
	read: fetchCartAll,
	create: fetchCartAll,
	update: fetchCartAll,
	delete: fetchCartAll
})

const [page] = usePage({ size: 100 })

await _on('create', { username: 123 })
await _on('delete', [2])
await _on('update', { id: 1 })
await _on('read', page)
console.log(list.value, 'value')

const handleClick = (toggleLoading: Function, params: number) => {
	console.log(params)
	setTimeout(() => toggleLoading(), 3000)
}
</script>

<style></style>
