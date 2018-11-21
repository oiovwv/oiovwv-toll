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