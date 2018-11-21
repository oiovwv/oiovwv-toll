import contentHeader from '../../../components/common/contentHeader'
import contentPanel from '../../../components/common/contentPanel'
import mainContent from '../../../components/layout/mainContent'
import chevron from '../../../components/common/chevron'
import tableComponent from '../../../components/common/tableComponent'
import pagination from '../../../components/common/pagination'
import panelModal from '../../../components/common/panelModal'
export default {
  data(){
    return {
      title:{a:'订单追踪信息',b:'雪佛龙订单追踪信息查询',c:'Chevron',d:"订单追踪信息"},
      subtitle:'雪佛龙发货订单追踪信息',
      tData:[
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''},
        {omsNum:454,orderNum:4545,trace:'武汉',start:'合肥',end:'武汉',
        orderTime:'2018-6-54',shipment:'2018-6-4',a:'',b:'',c:'',d:'',e:'',f:''}
      ],
      tHeader:[
        {prop:'omsNum',label:'OMS号',width:'120'},
        {prop:'orderNum',label:'订单号',width:'120'},
        {prop:'trace',label:'追',width:'120'},
        {prop:'start',label:'起',width:'120'},
        {prop:'end',label:'终',width:'120'},
        {prop:'orderTime',label:'下单时间',width:'120'},
        {prop:'shipment',label:'装运生成时间',width:'120'},
        {prop:'a',label:'出库确认时间',width:'120',width:'120'},
        {prop:'b',label:'交付时间',width:'120'},
        {prop:'c',label:'返单时间',width:'120'},
        {prop:'d',label:'OT不合格原因',width:'120'},
        {prop:'e',label:'不完整收货原因',width:'120'},
        {prop:'f',label:'交互OT',width:'120'}
      ],
      name:'订单追踪',
      txt:'下单时间',
      isShowModal:false,
      pageSize:20,
      currentPage:1
    }
  },
  components:{
    contentHeader,contentPanel,mainContent,chevron,tableComponent,pagination,panelModal
  },
  methods: {
    currentchange(value){
      this.currentPage=value
    },
    sizechange(value){
      this.pageSize=value
    },
    openModal(){
      this.isShowModal=!this.isShowModal
    },
    closeModal(){
      this.isShowModal=false
    }
  }
}