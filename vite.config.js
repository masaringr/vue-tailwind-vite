import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html')
      }
    }
  }
}



// module.exports = {
  
// }