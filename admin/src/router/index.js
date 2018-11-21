import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/layout'
Vue.use(Router)

//静态路由
export const constantRouterMap=[
  {
    path:'/redirect',
    component:Layout,
    hidden: true,
    children:[
      {
        path:'/redirect/:path*',
        component:()=>import('../views/redirect/index')
      }
    ]
  },
  {
    path:'/login',
    hidden: true,
    meta:{
      title:'登录'
    },
    component:()=>import('../views/login/index')
  },
  {
    path:'',
    component:Layout,
    redirect:'toll',
    children:[
      {
        path:'toll',
        name:"Toll",
        component:()=>import('../views/toll/index'),
        meta:{title: 'home', icon: 'home',noCache: true}
      }
    ]
  }
]
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes:constantRouterMap
})
//需要登录的路由
export const asyncRouterMap=[

  // 前端控制权限时，通过给路由加roles字段，本地配置路由表  打开下面的注释，
  // 同时修改store中的permission.js  user.js   src下的permission.js  打开与roles相关的注释
  // {
  //   path:'/alert',
  //   component:layout,
  //   redirect:'noredirect',
  //   name:'Alert',
  //   meta:{title: 'alert', icon: 'dashboard',roles:['admin']},
  //   children:[
  //     {
  //       path:'order',
  //       name:'Order',
  //       component:resolve=>require(['../views/alert/order'],resolve),
  //       meta:{title:"alert_order",noCache: true}
  //     },
  //     {
  //       path:'ship',
  //       name:'Ship',
  //       component:resolve=>require(['../views/alert/ship'],resolve),
  //       meta:{title:"alert_ship",noCache: true}
  //     }
  //   ]
  // },
  // {
  //   path:'/controltower',
  //   component:layout,
  //   redirect:'noredirect',
  //   name:'ControlTower',
  //   meta:{title: 'control', icon: 'pie-chart',noCache: true},
  //   children:[
  //     {
  //       path:'dataStat',
  //       name:"DataStat",
  //       component:resolve=>require(['../views/controlTower/dataStat.vue'],resolve),
  //       meta:{title:"control_stat"}
  //     },
  //     {
  //       path:'dataEdit',
  //       name:"DataEdit",
  //       component:resolve=>require(['../views/controlTower/dataEdit.vue'],resolve),
  //       meta:{title:"control_edit"}
  //     },
  //     {
  //       path:'average',
  //       name:"Average",
  //       component:resolve=>require(['../views/controlTower/average.vue'],resolve),
  //       meta:{title:"control_average"}
  //     }
  //   ]
  // },
  // {
  //   path:'/appManage',
  //   component:layout,
  //   redirect:'noredirect',
  //   name:'AppManage',
  //   meta:{title: 'app', icon: 'mobile',noCache: true},
  //   children:[
  //     {
  //       path:'appUse',
  //       name:"AppUse",
  //       component:resolve=>require(['../views/app/appUse.vue'],resolve),
  //       meta:{title:'app_use_query'}
  //     },
  //     {
  //       path:'appUseStats',
  //       name:"AppUseStats",
  //       component:resolve=>require(['../views/app/appUseStats.vue'],resolve),
  //       meta:{title:'app_use_stat_client'}
  //     },
  //     {
  //       path:'appUseCarrier',
  //       name:"AppUseCarrier",
  //       component:resolve=>require(['../views/app/appUseCarrier.vue'],resolve),
  //       meta:{title:'app_use_stat_carrier'}
  //     }
  //   ]
  // },
  // {
  //   path:'/systemManage',
  //   component:layout,
  //   redirect:'noredirect',
  //   name:'SystemManage',
  //   meta:{title: 'system', icon: 'expeditedssl',noCache: true},
  //   children:[
  //     {
  //       path:'userManage',
  //       name:"UserManage",
  //       component:resolve=>require(['../views/systemManage/userManage.vue'],resolve),
  //       meta:{title:'system_user_manage',icon:'users'}
  //     },
  //     {
  //       path:'permissionManage',
  //       name:"PermissionManage",
  //       component:resolve=>require(['../views/systemManage/permissionManage.vue'],resolve),
  //       meta:{title:'system_permission_manage',icon:'registered'}
  //     },
  //   ]
  // },
  // {
  //   path:'/chevron',
  //   component:layout,
  //   redirect:'noredirect',
  //   name:'Chevron',
  //   meta:{title: 'chevron', icon: 'cab',noCache: true},
  //   children:[
  //     {
  //       path:'orderTrace',
  //       name:"OrderTrace",
  //       component:resolve=>require(['../views/chevron/orderTrace.vue'],resolve),
  //       meta:{title: 'chevron_trace',icon:'bell'}
  //     },
  //     {
  //       path:'financeData',
  //       name:"FinanceData",
  //       component:resolve=>require(['../views/chevron/financeData.vue'],resolve),
  //       meta:{title: 'chevron_finance',icon:'bar-chart'}
  //     }
  //   ]
  // },
  // {
  //   path:'/supplier',
  //   component:layout,
  //   redirect:'noredirect',
  //   name:'Supplier',
  //   alwaysShow:true,
  //   meta:{title: 'supplier', icon: 'sitemap',noCache: true},
  //   children:[
  //     {
  //       path:'orderQuery',
  //       name:"OrderQuery",
  //       component:resolve=>require(['../views/supplier/orderQuery.vue'],resolve),
  //       meta:{title: 'supplier_order_query', icon: 'truck'}
  //     }
  //   ]
  // }
]