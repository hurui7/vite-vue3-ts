import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from '@/router/index'
import App from './App.vue'
import store from './store'
import 'amfe-flexible/index.js'
import {setDomFontSize} from './utils/dom'
import api from './api/api'
// 我这里用的是 provide inject 这个组件通信的方法

setDomFontSize()
const app = createApp(App)
app.provide('$api', api);
// 全局属性
// app.config.globalProperties.username = '张三'

app.use(router).use(store).use(ElementPlus).mount('#app')
