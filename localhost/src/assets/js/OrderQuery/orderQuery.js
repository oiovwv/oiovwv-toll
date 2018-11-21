import contentHeader from '../../../components/common/contentHeader'
import contentPanel from '../../../components/common/contentPanel'
import pagination from '../../../components/common/pagination'
import panelModal from '../../../components/common/panelModal'
import mainContent from '../../../components/layout/mainContent'

import query from '../../../components/common/query'

export default {
  data(){
    return {
      tableData:[
        {id:1,rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {id:2,rdcNum:44500001,orderNum:11244,omsNum:1213356464,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},{rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:1000,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212}
      ],
      tHead:[
        {prop:'rdcNum',label:'RDC代码',width:'200'},
        {prop:'orderNum',label:'订单号',width:'220'},
        {prop:'omsNum',label:'OMS号',width:'180'},
        {prop:'startCity',label:'起点城市',width:'83'},
        {prop:'endCity',label:'终点城市',width:'80'},
        {prop:'arrive',label:'到达',width:'80'},
        {prop:'delivery',label:'交付',width:'80'},
        {prop:'epod',label:'EPOD',width:'80'},
        {prop:'path',label:'轨迹',width:'80'}
      ],
      title:{a:'订单查询',b:'查询订单相关信息',c:'供应商相关查询',d:"订单查询"},
      subtitle:'查询面板',
      isShowModal:false,
      pageSize:20,
      currentPage:1
    }
  },
  components:{
    contentHeader,contentPanel,query,pagination,mainContent,panelModal
  },
  mounted(){
    // const MHeight=document.getElementsByClassName('content_main')[0].clientHeight
    // this.$nextTick(()=>{
    //     document.getElementsByClassName('el-table')[0].style.height=MHeight-70+'px'
    // })
  },
  methods:{
    currentchange(value){
      this.currentPage=value
    },
    sizechange(value){
      this.pageSize=value
    },
    // 打印方法
    print(){
      let subOutputRankPrint = document.getElementById('print');
      console.log(subOutputRankPrint.innerHTML);
      let newContent =subOutputRankPrint.innerHTML;
      let oldContent = document.body.innerHTML;
      document.body.innerHTML = newContent;
      window.print();
      window.location.reload();
      document.body.innerHTML = oldContent;
      return false
    },
    openModal(){
      this.isShowModal=!this.isShowModal
    },
    closeModal(){
      this.isShowModal=false
    },
    seeDetail(oms){
      this.$router.push('/logistics/'+oms)
    }
  }
}