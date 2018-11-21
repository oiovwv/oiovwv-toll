import request from '../utils/request'
import qs from 'qs'


//登录：当用户填写完账号和密码后向服务端验证是否正确，
//验证通过之后，服务端会返回一个token，拿到token之后（我会将这个token存贮到cookie中，保证刷新页面后能记住用户登录状态），
//前端会根据token再去拉取一个user_info 的接口来获取用户的详细信息（如用户权限，用户名等等信息）


export const loginByUsername=(userName,password)=>
    request({
        url:'/token',
        method:'POST',
        header:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            userName, password
        }
    })

//权限验证：通过token获取用户对应的 role，动态根据用户的 role 算出其对应有权限的路由，
//通过 router.addRoutes 动态挂载这些路由。
export const getUserInfo=(token)=>
    request({
        url: '/userInfo',
        method: 'POST',
        header:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            token
        }
        // get使用params
    })

export const logout = (token) => 
    request({
        url: '',
        method: 'POST',
        header:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        // 如需转成字符串 POST
        data:qs.stringify({
            token
        })
    })


    