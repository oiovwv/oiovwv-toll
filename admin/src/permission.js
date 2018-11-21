import router from './router'
import store from './store'
import {Message} from 'element-ui'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'
import {getToken} from './utils/auth'

NProgress.configure({showSpinner:true})


const whiteList=['login']
router.beforeEach((to, from, next) => {
    // to and from are both route objects
    NProgress.start()
    if(to.path==='/login'){
        next()
        return
    }
    if(getToken()){
        if(to.path==='/login'){
            next({path:'/'})
            NProgress.done()
        }else{
            if(store.getters.addRouters.length===0){
                store.dispatch('GetUserInfo').then(res=>{
                    const routers=res.data.result.routers
                    console.log(routers)
                    store.dispatch('GenerateRoutes',routers).then(()=>{
                        router.addRoutes(store.getters.addRouters)
                        next({...to,replace:true})
                    })
                }).catch(error=>{
                    store.dispatch('FedLogOut').then(()=>{
                        Message.error(error||'Verification failed, please login again')
                        next({path:'/'})
                    })
                })
            }else{
                next()
            }

            // 前端通过roles控制时打开
            // if(store.getters.roles.length===0){
            //     store.dispatch('GetUserInfo').then(res=>{
            //         const roles=res.data.result.roles
            //         store.dispatch('GenerateRoutes',{roles}).then(()=>{
            //             router.addRoutes(store.getters.addRouters)
            //             next({...to,replace:true})
            //         })
            //     }).catch(error=>{
            //         store.dispatch('FedLogOut').then(()=>{
            //             Message.error(error||'Verification failed, please login again')
            //             next({path:'/'})
            //         })
            //     })
            // }else{
            //     next()
            // }
        }
    }else{
        if(whiteList.indexOf(to.path)!=-1){
            next()
        }else{
            next({path:`/login?redirect=${to.path}`})
            NProgress.done()
        }  
    }
})

router.afterEach(()=>{
    NProgress.done()
})