<template>
	<el-button v-bind="$attrs" v-if="isShow" @click="handleClick" :loading="loading">
		<slot>权限按钮</slot>
	</el-button>
</template>

<script lang="ts">
export default { name: 'AuthButton' }
</script>
<script setup lang="ts">
import { useLoading } from '~/hooks'

interface IProp {
	/**
	 * @description
	 * 按钮权限名称
	 * @example
	 * <auth-button auth="xxx:add"></auth-button>
	 */
	auth: string
}

const props = withDefaults(defineProps<IProp>(), {
	auth: ''
})

const emit = defineEmits<{
	(e: 'authClick', fun: Function): void
}>()

const [loading, setLoading] = useLoading()

const handleClick = () => {
	loading.value = true
	emit('authClick', setLoading)
}

// TODO: 获取权限数据
const isShow = computed<boolean>(() => ['add'].includes(props.auth))
</script>

<style></style>
