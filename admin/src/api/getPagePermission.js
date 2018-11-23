import request from '../utils/request'

export const getPagePermission=(token)=>
    request({
        url:'/permission',
        method:'POST',
        header:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            token
        }
    })