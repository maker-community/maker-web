import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite升级到3或以上版本，打印的地址将不再是localhostl,而是127.0.0.1
// 参考链接：https://juejin.cn/post/7200632181768831013
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
