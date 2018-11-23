import Layout from '@/views/Layout/layout'

const constantChildrenRouter=[
    {
        path:'/supplier/orderQuery',
        component:Layout,
        children:[
            {
                path:'orderDetail',
                name:'OrderDetail',
                component:()=>import('@/views/supplier/components/orderDetail.vue')
            }
        ]
    }
]

export default constantChildrenRouter