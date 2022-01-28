import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import postCssPxToRem from 'postcss-pxtorem'
import autoPrefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(loadEnv(mode, process.cwd()).NODE_ENV)
  console.log(loadEnv(mode, process.cwd()).VITE_APP_APPLICATION)

  return defineConfig({
    base: './',
    plugins: [vue(), styleImport({ resolves: [VantResolve()] })],
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, '.', 'src') }]
    },
    css: {
      postcss: {
        plugins: [
          // 自动css前缀
          autoPrefixer({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
          }),
          postCssPxToRem({
            // rootValue:根目录字体大小。
            // 设计图页面尺寸如果是750就填75,是640就填入64
            // 如果为了适配vantui我们需要和vant官方一致37.5。
            // 比如元素宽150px,最终页面会换算成 2rem （150px/75=2rem）
            rootValue: 37.5,
            propList: ['*'], // 属性的选择器，*表示通用
            minPixelValue: 12, // px小于12的不会被转换
            unitPrecision: 2, // 保留rem小数点多少位
            selectorBlackList: [] // 忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
          })
        ]
      }
    },
    server: {}
  })
}
