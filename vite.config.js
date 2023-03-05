import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		// 导入时想要省略的扩展名列表
		extensions: ['.vue', '.js'],
		// 路径别名
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
})
