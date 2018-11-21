import contentHeader from '../../../components/common/contentHeader'
import treeTable from '../../../components/Alert/treeTable/treeTable'
import {getShipOrder,getTreeData,getIomd,getIomdGroup} from '../../../utils/api/index'

export default {
    data() {
      return {
        title:{a:'发货订单',b:'分状态统计订单数及相关预警信息',c:'可视化预警/Pre-Alert',d:"发货订单"},
        tabs:[
          {label:'新单',num:'Loading'},
          {label:'释放',num:'Loading'},
          {label:'拣货',num:'Loading'},
          {label:'配车',num:'Loading'},
          {label:'在途',num:'Loading'},
          {label:'支付',num:'Loading'},
          {label:'回单',num:'Loading'}
        ],
        activeIndex:0,
        leftTableData:[
          {label:'当天新建',num:6556,a:'',b:''},
          {label:'历史订单',num:6556,a:'',b:''},
          {label:'转仓订单',num:6556,a:'',b:''},
          {label:'接驳订单',num:6556,a:'',b:''},
          {label:'无报价订单',num:6556,a:'',b:''}
        ],
        showMiddleTable:false,
        showRightTable:false,
        middleTableData:[],
        rightTableData:[],
        tableHead:{
          date:'日期',a:'新建',b:'已释放',c:'已取消',d:'已拣货',e:'已发货',
          f:'已发运',g:'已交付',h:'准时交付',i:'完整交付',j:'已回单',k:'准时回单'
        },
        orderData:[],
        leftTableHeight:0,
        leftRowCheckedIndex:100,
        middleRowCheckedIndex:100
      }
    },
    mounted(){

      getShipOrder()
      .then(res=>{
        this.tabs.forEach(function(item,index){
          if(item.label=="新单"){
            item.num=res.data.NewCount  
          }else if(item.label=="释放"){
            item.num=res.data.ReleaseCount
          }else if(item.label=="拣货"){
            item.num=res.data.PickupCount           
          }else if(item.label=="配车"){
            item.num=res.data.PlanCount           
          }else if(item.label=="在途"){
            item.num=res.data.IntransitCount           
          }else if(item.label=="支付"){
            item.num=res.data.DeliveryCount            
          }else{
            item.num=res.data.CloseCount            
          }
        })
      })

      getTreeData()
      .then(res=>{
        this.orderData=res.data
      })

      // this.$http(this.Api.shipOrder)
      // .then(res=>{
      //   this.tabs.forEach(function(item,index){
      //     if(item.label=="新单"){
      //       item.num=res.data.NewCount  
      //     }else if(item.label=="释放"){
      //       item.num=res.data.ReleaseCount
      //     }else if(item.label=="拣货"){
      //       item.num=res.data.PickupCount           
      //     }else if(item.label=="配车"){
      //       item.num=res.data.PlanCount           
      //     }else if(item.label=="在途"){
      //       item.num=res.data.IntransitCount           
      //     }else if(item.label=="支付"){
      //       item.num=res.data.DeliveryCount            
      //     }else{
      //       item.num=res.data.CloseCount            
      //     }
      //   })
      // })

      // this.$http(this.Api.treeData)
      // .then(res=>{
      //   this.orderData=res.data
      // })
    },
    methods:{
      toggle(index){
        this.activeIndex=index
        this.showMiddleTable=false
        this.showRightTable=false
        if(index==0){
          this.leftTableData=[
            {label:'当天新建',num:6556,a:'',b:''},
            {label:'历史订单',num:6556,a:'',b:''},
            {label:'转仓订单',num:6556,a:'',b:''},
            {label:'接驳订单',num:6556,a:'',b:''},
            {label:'无报价订单',num:6556,a:'',b:''}
          ]
        }else if(index==1){
          this.leftTableData=[
            {label:'未装运',num:6556,a:'',b:''},
            {label:'未配货',num:6556,a:'',b:''},
            {label:'未进TMS',num:6556,a:'',b:''},
            {label:'未进WMS',num:6556,a:'',b:''}
          ]
        }else if(index==2){
          this.leftTableData=[
            {label:'未处理',num:6556,a:1212,b:121},
            {label:'已拣货',num:6556,a:454,b:45},
            {label:'已发货',num:6556,a:4878,b:4458}
          ]         
        }else if(index==3){
          this.leftTableData=[
            {label:'待配车',num:6556,a:1212,b:4545},
            {label:'已计划',num:6556,a:544,b:4545},
            {label:'已出库',num:6556,a:878,b:46},
            {label:'自提',num:6556,a:545,b:88}
          ]          
        }else if(index==4){
          this.leftTableData=[
            {label:'KPI 合格',num:6556,a:'',b:''},
            {label:'KPI不合格',num:6556,a:'',b:''},
            {label:'缺少KPI',num:6556,a:'',b:''},
            {label:'即将延误',num:6556,a:'',b:''},
            {label:'有APP数据',num:6556,a:'',b:''},
            {label:'无APP数据',num:6556,a:'',b:''}
          ]        
        }else if(index==5){
          this.leftTableData=[
            {label:'当天交付',num:6556,a:'',b:''},
            {label:'历史交付',num:6556,a:'',b:''},
            {label:'KPI 合格',num:6556,a:'',b:''},
            {label:'KPI 不合格',num:6556,a:'',b:''},
            {label:'APP 交付',num:6556,a:'',b:''},
            {label:'非 APP 交付',num:6556,a:'',b:''}
          ]         
        }else{
          this.leftTableData=[
            {label:'KPI 合格',num:6556,a:'',b:''},
            {label:'KPI 不合格',num:6556,a:'',b:''},
            {label:'完整签收',num:6556,a:'',b:''},
            {label:'不完整签收',num:6556,a:'',b:''},
            {label:'已上传EPOD',num:6556,a:'',b:''},
            {label:'未上传EPOD',num:6556,a:'',b:''}
          ]          
        }
      },
      // 按RDC显示中间第二个表格
      showRDCTable(group,index){
        this.showMiddleTable=true
        this.leftRowCheckedIndex=index
        this.tip(this.activeIndex,index)
        this.leftTableHeight=document.getElementsByClassName('little_table')[0].clientHeight
        document.getElementsByClassName('little_table')[1].style.height=this.leftTableHeight+'px'
        // this.$http(this.Api.iomd)
        getIomd()
        .then(res=>{
          this.middleTableData=res.data
        })
      },
      // 按客户号显示中间第二个表格
      showClientTable(group,index){
        console.log(group)
        this.tip(this.activeIndex,index)
      },
      // 显示右边第三个表格
      showClientGroup(index){
        this.showRightTable=true
        this.middleRowCheckedIndex=index
        document.getElementsByClassName('little_table')[2].style.height=this.leftTableHeight+'px'
        // this.$http(this.Api.iomdGroup)
        getIomdGroup()
        .then(res=>{
          this.rightTableData=res.data
        })
      },
      tip(activeIndex,index){
        if(activeIndex==0&&index>1){
          this.showMiddleTable=false
          this.$notify({
            title: '提示',
            message: '努力开发中...',
            duration:0,
            type: 'warning'
          });
        }
      },
      handlerExpand(m){
        m.isExpand = !m.isExpand
      },
      iomrView(m){
        this.$router.push('/iomrView/'+m.ObjectName)
      }
    },
    components:{
      contentHeader,treeTable
    }
}
