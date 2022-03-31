import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import login from '@/views/login/index.vue'
import mainPage from '@/views/mainpage/index.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/mainPage',
        name: 'mainPage',
        component: mainPage,
        redirect: "/mainPage/page",
        children: [
            {
                path: "page",
                name: "page",
                meta: { 
                  requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/mainpage/page/index.vue")
            },
            {
                path: "article",
                name: "article",
                meta: { 
                  requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/mainpage/article/index.vue")
            },
        ]
    }
]
const router = createRouter({
    // history 模式的实现。hash模式:createWebHashHistory()
    history: createWebHistory(),
    routes
})
const whiteList = ['/','/mainPage']

router.beforeEach((to,from,next)=>{
    next()
//   if(whiteList.indexOf(to.path) !== 0) {
//     // 放行，进入下一个路由
//     next()
//   } else if(!(sessionStorage.getItem('token'))){
//     next('/');     
//   } else {
//     next()
//   }  
})
export default router
