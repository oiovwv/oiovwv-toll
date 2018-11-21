import contentHeader from '../../../components/common/contentHeader'
import contentPanel from '../../../components/common/contentPanel'
import pagination from '../../../components/common/pagination'
import panelModal from '../../../components/common/panelModal'
import tableComponent from '../../../components/common/tableComponent'

export default {
  data(){
    return {
      title:{a:'App使用查询',b:'运输跟踪App使用情况统计分析数据查询',c:'App管理查询',d:"App使用查询"},
      subtitle:'查询面板',
      isShowModal:false,
      options: [
        {value: '选项1',label: '黄金糕'}, 
        {value: '选项2',label: '双皮奶'},
        {value: '选项3',label: '蚵仔煎'}, 
        {value: '选项4',label: '龙须面'}, 
        {value: '选项5',label: '北京烤鸭'}
      ],
      value5: [],
      time:'',
      tableData:[
        {id:1,rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {id:2,rdcNum:44500001,orderNum:11244,omsNum:1213356464,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},{rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212},
        {rdcNum:44500001,orderNum:11244,omsNum:445,startCity:'安徽',endCity:'武汉',
        arrive:1212,delivery:454,epod:45487,path:70,vendorCode:12121254,shippingNum:1212545,
        driverName:'mike',shippedNum:54545,consigneeName:'啊哈',weight:900,consigneeAddr:'美年广场',
        orderTime:'2018-09-11',shippedTime:'2018-09-12',bulk:1212}
      ],
      tHead:[
        {prop:'rdcNum',label:'RDC代码',width:'200'},
        {prop:'orderNum',label:'装运编号',width:'220'},
        {prop:'omsNum',label:'GSN号',width:'200'},
        {prop:'arrive',label:'承运商',width:'102'},
        {prop:'startCity',label:'起点城市',width:'105'},
        {prop:'endCity',label:'终点城市',width:'90'},
        {prop:'arrive',label:'到达',width:'90'},
        {prop:'delivery',label:'交付',width:'90'},
        {prop:'epod',label:'EPOD',width:'90'},
        {prop:'path',label:'轨迹',width:'90'}
      ],
      pageSize:15,
      currentPage:1
    }
  },
   methods: {
    openModal(){
      this.isShowModal=!this.isShowModal
    },
    closeModal(){
      this.isShowModal=false
    },
    handleCurrentChange(val) {
      this.currentPage=val
    }
  },
  components:{
    contentHeader,contentPanel,pagination,panelModal,tableComponent
  }
}

