import axios from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'

const service=axios.create({
    baseURL:'http://localhost:3030',
    timeout:5000
})

// http request 拦截器
service.interceptors.request.use(
    config => {
        var token=Cookie.get('Token')
        if (token!=undefined) {  
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.token = `${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    // store.commit(types.LOGOUT);
                    console.log('此处退出登录')
                    router.replace({
                        path: '/',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error)
    }
);

export default service
