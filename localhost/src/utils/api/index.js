import request from '../request'
import qs from 'qs'

export const UserLogin = (userName,password,isEKP) => 
    request({
        url: '/query',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
            // 'Content-Type': 'application/json;charset=UTF-8'
        },
        params:{}
        // 参数默认为json POST
        // data:{
        //     userName,
        //     password,
        //     isEKP
        // }
    })

// export const UserInfo = (token) => 
//     request({
//         url: '/Auth/UserInfo',
//         method: 'POST',
//         header:{
//             'X-Requested-With': 'XMLHttpRequest',
//             'Content-Type': 'application/json;charset=UTF-8'
//         },
//         // 如需转成字符串 POST
//         data:qs.stringify({
//             token
//         })
//     })

export const getMenu = () => 
    request({
        url: '/navMenu',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getClient = () => 
    request({
        url: '/client',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getCarrier = () => 
    request({
        url: '/carrier',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getEditData = () => 
    request({
        url: '/editData',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getSave = () => 
    request({
        url: '/save',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })


export const getStatData = () => 
    request({
        url: '/statData',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })



export const getShipOrder = () => 
    request({
        url: '/shipOrder',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getTreeData = () => 
    request({
        url: '/treeData',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getIomd = () => 
    request({
        url: '/iomd',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getIomdGroup = () => 
    request({
        url: '/iomdGroup',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{}
    })

export const getVisual = (rdc) => 
    request({
        url: '/visual',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        // data:qs.stringify({
        //     rdc
        // })
        params:{}
    })

export const getWeather = (province) => 
    request({
        url: '/weather',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{
            sort:province
        }
    })

export const getWeatherByCity = (city) => 
    request({
        url: '/weatherByCity',
        method: 'GET',
        header:{
            'X-Requested-With': 'XMLHttpRequest'
        },
        params:{
            sort:city
        }
    })

