import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {registerMicroApps, setDefaultMountApp, start} from 'qiankun';


registerMicroApps([
    {
        name: 'vue-1', // app name registered
        entry: '//localhost:7100',
        container: '#vue-1',
        activeRule: '/vue-1',
    },
    {
        name: 'vue-2',
        entry: '//localhost:7200' ,
        container: '#vue-2',
        activeRule: '/vue-2',
    },
    {
        name: 'html',
        entry: '//localhost:7300' ,
        container: '#html',
        activeRule: '/html',
    },
    {
        name: 'react',
        entry: '//localhost:7400' ,
        container: '#react',
        activeRule: '/react',
    },
]);

//默认加载子应用 vue-1
// setDefaultMountApp('/vue-1')
start({
    prefetch: false // 取消预加载
})
createApp(App).use(router).use(ElementPlus).mount('#app')
