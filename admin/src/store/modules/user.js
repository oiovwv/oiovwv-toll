import {loginByUsername,getUserInfo,logout} from '@/api/login'
import {setToken,getToken,removeToken} from '@/utils/auth'


const user={
    state:{
        user:'',
        name:'',
        avatar:'',
        token:getToken()
        // 前端通过roles控制时打开注释
        // roles:[]
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token=token
        },
        SET_NAME:(state,name)=>{
            state.name=name
        },
        SET_AVATAR:(state,avatar)=>{
            state.avatar=avatar
        }
        // SET_ROLES:(state,roles)=>{
        //     state.roles=roles
        // }
    },
    actions:{
        // 请求并存储token
        LoginByUsername({commit},userInfo){
            const username=userInfo.username.trim()
            return new Promise((resolve,reject)=>{
                loginByUsername(username,userInfo.password).then(res=>{
                    const result=res.data.result
                    commit('SET_TOKEN',result.token)
                    setToken(result.token)
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        //通过token获取用户信息
        GetUserInfo({commit,state}){    
            return new Promise((resolve,reject)=>{   
                getUserInfo(state.token).then(res=>{
                    console.log(res.data.result)
                    if(res.data.result){
                        // if(res.data.result.roles.length&&res.data.result.roles.length>0){
                        //     commit('SET_ROLES',res.data.result.roles)
                        // }
                        commit('SET_AVATAR',res.data.result.avatar)
                        commit('SET_NAME',res.data.result.name)
                    }
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        FedLogOut({commit}){
            return new Promise(resolve=>{
                commit('SET_TOKEN','')
                removeToken()
                resolve()
            })
        },
        LogOut({commit,state}){
            return new Promise((resolve,reject)=>{
                logout(state.token).then(res=>{
                    commit('SET_TOKEN','')
                    removeToken()
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
        // ChangeRoles({commit,dispatch},role){
        //     return new Promise(resolve=>{
        //         commit('SET_TOKEN',role)
        //         setToken(role)
        //         getUserInfo(role).then(res=>{
        //             const data=res.data.result
        //             commit('SET_ROLES',data.roles)
        //             commit('SET_NAME',data.name)
        //             dispatch('GenerateRoutes',data)
        //             resolve()
        //         })
        //     })
        // }
    }
}

export default user