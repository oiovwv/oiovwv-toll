import {constantRouterMap} from '../../router/index'
// import {asyncRouterMap,constantRouterMap} from '../../router/index'

import Layout from '@/views/Layout/layout'
// 根据环境引入组件
const _import = require('@/router/_import_' + process.env.NODE_ENV)


// 前端通过roles控制路由时打开
// 判断是否与当前用户权限匹配
// function hasPermission(roles,route){
//     if(route.meta&&route.meta.roles){
//         return roles.some(role=>route.meta.roles.includes(role))
//     }else{
//         return true
//     }
// }
// 递归过滤异步路由表，返回符合用户角色权限的路由表
// function filterAsyncRouter(routes,roles){
//     const res=[]
//     routes.forEach(route=>{
//         const tmp={...route}
//         if(hasPermission(roles,tmp)){
//             if(tmp.children){
//                 tmp.children=filterAsyncRouter(tmp.children,roles)
//             }
//             res.push(tmp)
//         }
//     })
//     return res
// }


// 后台控制时
// 递归过滤后台返回的异步路由表，返回将组件字符串解析成组件对象后的路由表
function filterAsyncRouter(asyncRouter){
    const accessedRouters = asyncRouter.filter(route => {
        if(route.component) {
            if (route.component === 'Layout'){//Layout组件特殊处理
                route.component = Layout
            } else {
                route.component = _import(route.component)
            }
        }
        if(route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return accessedRouters
}

const permission={
    state:{
        routers:constantRouterMap,
        addRouters:[]
    },
    mutations:{
        SET_ROUTERS:(state,routers)=>{
            state.addRouters=routers
            state.routers=constantRouterMap.concat(routers)
        }
    },
    actions:{
        GenerateRoutes({commit},data){
            return new Promise(resolve=>{
                // 前端控制时，，还需引入asyncRouterMap
                // const {roles}=data
                // 
                // if(roles.includes('admin')){
                //     accessedRouters=asyncRouterMap
                // }else{
                //     accessedRouters=filterAsyncRouter(asyncRouterMap,roles)
                // }
                // commit('SET_ROUTERS',accessedRouters)
                // resolve()
                
                let accessedRouters=filterAsyncRouter(data)
                commit('SET_ROUTERS',accessedRouters)
                resolve()
            })   
        }
    }
}
export default permission