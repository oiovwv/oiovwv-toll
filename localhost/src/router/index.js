import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/layout/Login'
import Home from '@/components/layout/Home'
import Cookie from 'js-cookie'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      meta:{
        title:'登录',
        requireAuth:false
      },
      name: 'Login',
      component: Login
    },
    {
      path:'/home',
      meta:{
        title:'后台管理中心',
        requireAuth:true
      },
      name:'Home',
      component:Home,
      children:[
        {
          path:'/toll',
          meta:{
            title:'首页',
            requireAuth:true
          },
          component:resolve=>require(['../components/common/toll.vue'],resolve)
        },
        {
          path:'/orderTotal',
          meta:{
            title:'订单管理',
            requireAuth:true
          },
          component:resolve=>require(['../components/Alert/orderTotal.vue'],resolve)
        },
        {
          path:'/shipmentOrder',
          meta:{
            title:'发货订单可视化',
            requireAuth:true
          },
          component:resolve=>require(['../components/Alert/shipmentOrder.vue'],resolve)
        },
        {
          path:'/repository',
          meta:{
            title:'仓储可视化',
            requireAuth:true
          },
          component:resolve=>require(['../components/Alert/repository.vue'],resolve)
        },
        {
          path:'/appUseQuery',
          meta:{
            title:'APP使用查询',
            requireAuth:true
          },
          component:resolve=>require(['../components/App/appUseQuery.vue'],resolve)
        },
        {
          path:'/appUseStatsClient',
          meta:{
            title:'APP使用统计（分客户）',
            requireAuth:true
          },
          component:resolve=>require(['../components/App/appUseStats.vue'],resolve)
        },
        {
          path:'/appUseStatsCarrier',
          meta:{
            title:'APP使用统计（分承运商）',
            requireAuth:true
          },
          component:resolve=>require(['../components/App/appUseStatsCarrier.vue'],resolve)
        },
        {
          path:'/dataStat',
          meta:{
            title:'数据统计',
            requireAuth:true
          },
          component:resolve=>require(['../components/Control/dataStat.vue'],resolve)
        },
        {
          path:'/dataEdit',
          meta:{
            title:'数据编辑',
            requireAuth:true
          },
          component:resolve=>require(['../components/Control/dataEdit.vue'],resolve)
        },
        {
          path:'/CT',
          meta:{
            title:'CT统计表平均值',
            requireAuth:true
          },
          component:resolve=>require(['../components/Control/controlTower.vue'],resolve)
        },
        {
          path:'/userManage',
          meta:{
            title:'用户管理',
            requireAuth:true
          },
          component:resolve=>require(['../components/System/userManage.vue'],resolve)
        },
        {
          path:'/permissionManage',
          meta:{
            title:'权限组管理',
            requireAuth:true
          },
          component:resolve=>require(['../components/System/permissionManage.vue'],resolve)
        },
        {
          path:'/financeData',
          meta:{
            title:'财务数据',
            requireAuth:true
          },
          component:resolve=>require(['../components/Chevron/financeData.vue'],resolve)
        },
        {
          path:'/orderQuery',
          meta:{
            title:'订单查询',
            requireAuth:true
          },
          component:resolve=>require(['../components/OrderQuery/orderQuery.vue'],resolve)
        },
        {
          path:'/orderTrace',
          meta:{
            title:'订单追踪信息',
            requireAuth:true
          },
          component:resolve=>require(['../components/Chevron/orderTrace.vue'],resolve)
        },
        {
          path:'/logistics/:omsNum',
          meta:{
            title:'订单详细信息',
            requireAuth:true
          },
          component:resolve=>require(['../components/OrderQuery/logistics.vue'],resolve)
        },
        {
          path:'/iomrView/:date',
          meta:{
            title:'订单列表【发货订单可视化】',
            requireAuth:true
          },
          component:resolve=>require(['../components/Alert/iomrView.vue'],resolve)
        }
      ]
    },
    {
      path:'/display/:RDC',
      meta:{
        title:'仓储可视化界面',
        requireAuth:false
      },
      component:resolve=>require(['../components/Alert/display/display.vue'],resolve)
    },
    {
      path:'/displayView',
      name:'displayView',
      meta:{
        title:'订单汇总信息',
        requireAuth:false
      },
      component:resolve=>require(['../components/Alert/display/displayView.vue'],resolve)
    }
  ]
})

//修改标题  路由拦截
router.beforeEach((to,from,next)=>{
  let token=Cookie.get('Token')
  if(to.meta.title){
    document.title=to.meta.title
  }

  if(to.path !== '/') {
    if(!token) {
      next({
				path: '/',
				query: { redirect: to.fullPath }
      })
      return
    }
  }else{
    next()
  }
  if(to.meta.requireAuth){
    if(token){
      next()
    }else{
      next({
        path:'/',
        query:{redirect: to.fullPath}
      })
    }
  }else{
    next()
  }
})

export default router