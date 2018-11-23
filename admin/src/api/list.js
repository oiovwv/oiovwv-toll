import request from '@/utils/request'

export const getList=(form)=>
    request({
        url:'/list',
        method:'POST',
        header:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            form
        }
    })