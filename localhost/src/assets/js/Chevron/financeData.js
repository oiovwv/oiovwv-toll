
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
      title:{a:'财务数据',b:'雪佛龙实时查询计费情况',c:'Chevron',d:"财务数据"},
      subtitle:'雪佛龙计费信息',
      tData:[
        {a:'ad',b:'fasf',c:'',d:'',e:'',f:'',g:'',h:'',i:'',j:'',
        k:'',l:'',m:'',n:'',o:'',p:'',q:''}
      ],
      tHeader:[
        {prop:'a',label:'操作仓库',width:'120'},
        {prop:'b',label:'OMS号',width:'120'},
        {prop:'c',label:'销售订单SO',width:'120'},
        {prop:'d',label:'运作日期',width:'120'},
        {prop:'e',label:'起运地',width:'120'},
        {prop:'f',label:'客户名称',width:'120'},
        {prop:'g',label:'运货地址',width:'120'},
        {prop:'h',label:'L',width:'120'},
        {prop:'i',label:'直接运费（不含税）',width:'120'},
        {prop:'j',label:'参考运费（价）',width:'120'},
        {prop:'k',label:'特殊运费（如压车费放空费等）',width:'120'},
        {prop:'l',label:'结费城市',width:'120'},
        {prop:'m',label:'运费费率',width:'120'},
        {prop:'n',label:'参考运费（价税合计）',width:'120'},
        {prop:'o',label:'特殊费用备注',width:'120'},  
        {prop:'p',label:'STA备注',width:'120'},  
        {prop:'q',label:'运作数量',width:'120'}  
      ],
      name:'计费',
      txt:'运作时间',
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
