# 项目配置
## 关于node
> 存在.nvmrc文件，可以使用 `nvm use` 命令找到默认的节点版本
> 同样，如果未安装指定的节点版本，只需运行 。
- `nvm use`
- `nvm install`

## 配置推荐
- 使用`node 16.13.0`左右
- 使用`pnpm`

## 项目运行
- `pnpm install`
- `pnpm dev`

# 注意事项
项目实现顶层`await`，但是 `Suspense` 是一项实验性功能。它不一定会最终成为稳定功能，并且在稳定之前相关 API 也可能会发生变化。
# 组件描述
```html
<template>
	<auth-button auth="add" @auth-click="(fun) => handleClick(fun, 123)"></auth-button>
</template>

<script setup lang="ts">

const handleClick = (toggleLoading: Function, params: number) => {
	console.log(params)
	setTimeout(() => toggleLoading(), 3000)
}
</script>
<!-- 其它参数同 el-button -->
```

# vscode 配置
## Volar Takeover 模式
> 仅针对 VSCode + Volar。

为了让 Vue 单文件组件和 TypeScript 一起工作，Volar 创建了一个针对 Vue 的 TS 语言服务实例，将其用于 Vue 单文件组件。

同时，普通的 TS 文件依然由 VSCode 内置的 TS 语言服务来处理。这也是为什么我们需要安装 TypeScript Vue Plugin 来支持在 TS 文件中引入 Vue 单文件组件。

这套默认设置能够工作，但在每个项目里我们都运行了两个语言服务实例：一个来自 Volar，一个来自 VSCode 的内置服务。这在大型项目里可能会带来一些性能问题。

为了优化性能，Volar 提供了一个叫做“Takeover 模式”的功能。在这个模式下，Volar 能够使用一个 TS 语言服务实例同时为 Vue 和 TS 文件提供支持。

要开启 Takeover 模式，你需要执行以下步骤来在你的项目的工作空间中禁用 VSCode 的内置 TS 语言服务：

1. 在当前项目的工作空间下，用 `Ctrl + Shift + P` (macOS：`Cmd + Shift + P`) 唤起命令面板。
2. 输入`built`，然后选择`Extensions：Show Built-in Extensions`。
3. 在插件搜索框内输入`typescript` (不要删除 `@builtin` 前缀)。
4. 点击`TypeScript and JavaScript Language Features`右下角的小齿轮，然后选择`Disable (Workspace)`。
5. 重新加载工作空间。Takeover 模式将会在你打开一个 Vue 或者 TS 文件时自动启用。

## prettier配置
为确保使用的是项目配置文件，统一代码规范为主。需要开启根据配置文件进行格式化。
开启步骤
1. 开启设置，在搜索框输入 `prettier require config`
2. 勾选 `prettier: require Config`
3. 搜索 `Editor: format on save`
4. 勾选 `Editor: format On Save`

```json
"prettier.requireConfig": true
"editor.formatOnSave": true
```

# 图标渲染

## 基本使用
- 图标素材来自：https://icones.js.org/ 100多个图标集中有超过100，000个图标可用
- 配置了动态按需引入，直接复制名称当组件使用即可
- 以前缀 `i-` 开头
```html
<i-ic:baseline-10k />
<i-ic:baseline-123>
```

## 动态渲染

[官网查询](https://docs.iconify.design/icon-components/vue/)

安装`@iconify/vue`
```base
npm install --save-dev @iconify/vue
```
并从中导入组件,组件导出为命名导出：
```js
import { Icon } from '@iconify/vue'
```

然后在模板中使用带有图标名称的图标组件作为图标参数：
```html
<Icon icon="ic:baseline-10k" />
```


# hooks使用

## useLoading
```javaScript
const [loading, setLoading] = useLoading() // loading = false
// or
const [loading, setLoading] = useLoading(true) // loading = true

setLoading(false) // 将loading状态设置为false
setLoading() // loading状态取反

```

## usePage
```javaScript
const [page, loading, setLoading] = usePage() // { page: 1, size: 10 }
const [page, loading, setLoading] = usePage({ size: 100 }) // { page: 1, size: 100 }

```

## useCRUD 未完善
```javaScript
import { useCRUD, usePage } from '~/hooks'

// 增查改删（create, read, update, delete）
// 一般对应 新增数据、获取数据、更新数据、删除数据 api

// list 为 read获取的表格数据
const { _on, list } = useCRUD<string>({
	read: fetchApiRead,
	create: fetchApiCreate,
	update: fetchApiUpdate,
	delete: fetchApiDelete
})

const [page] = usePage({ size: 100 })

// 通过_on 函数监听、第二个值为api需要传递的参数
await _on('create', { username: 123 })
await _on('delete', [2])
await _on('update', { id: 1 })
await _on('read', page)
```