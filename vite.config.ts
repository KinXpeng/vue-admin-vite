import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createHtmlPlugin } from 'vite-plugin-html'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/

export default ({ mode }: { mode: string }) => {
	// 根据当前工作目录中的 `mode` 加载 .env 文件
	// 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
	const env = loadEnv(mode, process.cwd(), '')
	return defineConfig({
		base: '/',
		resolve: {
			alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }]
		},
		optimizeDeps: {
			include: ['vue', 'vue-router', 'pinia']
		},
		plugins: [
			vue(),
			UnoCss(),
			AutoImport({
				imports: ['vue', 'vue-router', 'pinia'],
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				dirs: ['src/components'],
				dts: './components.d.ts',
				extensions: ['vue'],
				deep: true, // 搜索子目录
				include: [/\.vue$/, /\.vue\?vue/],
				exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
				resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'i' })]
			}),
			Icons({
				defaultClass: 'inline',
				defaultStyle: 'vertical-align: sub;'
			}),
			createHtmlPlugin({
				inject: {
					data: {
						title: env.VITE_APP_TITLE
					}
				}
			})
		],
		server: {
			host: '0.0.0.0',
			port: 4273,
			open: true,
			proxy: {
				'/api': {
					target: 'http://gelvxuan.cn/api',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		},
		build: {
			outDir: 'docs' // 打包后文件包名称
		}
	})
}
