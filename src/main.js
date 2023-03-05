import { createApp } from 'vue'
import App from './App.vue'

// 方式1
// import SensenUI from '../modules/sensen-ui'
// createApp(App).use(SensenUI).mount('#app')

// 方式2
// import Transfer from '../modules/sensen-ui/Transfer'
// createApp(App).use(Transfer).mount('#app')

// 方式3 直接在app.vue中导入使用
createApp(App).mount('#app')
