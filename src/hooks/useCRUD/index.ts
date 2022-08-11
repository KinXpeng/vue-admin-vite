import type { Ref } from 'vue'

interface IApi {
	create: Function
	read: Function
	update: Function
	delete: Function
}

interface IReturnOn {
	on: (name?: string, params?: any) => this
}

enum EListenName {
	create = 'create',
	read = 'read',
	update = 'update',
	delete = 'delete'
}
/*
api 列表
form 表单 ref

获取列表
删除对应数据
修改/新增数据
*/

type ListenName = 'create' | 'read' | 'update' | 'delete'

const throwError = (api: Function, name: ListenName) => {
	if (!api) {
		const message = `api ${name} is ${api}, 请在useCRUD参数中传递`
		ElMessage.error(message)
		throw new Error(message)
	}
}

export function useCRUD<T = any>(crud: Partial<IApi>) {
	const list: Ref<Array<T>> = ref([])

	async function createData(params: any) {
		throwError(crud.create!, 'create')
		console.log('api create success', params)
		return 'success'
	}

	async function readData<T = any>(params: T & IPage) {
		throwError(crud.read!, 'read')
		console.log('api read success', params)
		return 'read'
	}

	async function deleteData(params: string | number | string[] | number[]) {
		throwError(crud.delete!, 'delete')
		console.log('api delete success', params)
		return 'delete'
	}

	async function updateData(params: any) {
		throwError(crud.update!, 'update')
		console.log('api update success', params)
		return 'update'
	}

	async function _on(name: ListenName, params?: any) {
		const _fun = { create: createData, read: readData, update: updateData, delete: deleteData }

		return await _fun[name as keyof typeof _fun](params)
	}

	return { list, _on }
}
