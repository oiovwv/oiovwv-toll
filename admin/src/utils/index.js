import store from '../store'
import {Message} from 'element-ui'

export function isExternal(path){
    return /^(https?:|mailto:|tel:)/.test(path)
}

export function translateMessage(zhMessage,enMessage){
    const language=store.state.app.language
    Message({
        type:'warning',
        showClose:true,
        message:language==='zh'?zhMessage:enMessage
    }) 
}

export function getMap(){
    let map = new BMap.Map("addressMap");          // 创建地图实例  
    let point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
}