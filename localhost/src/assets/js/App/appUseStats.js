import contentHeader from '../../../components/common/contentHeader'
import contentPanel from '../../../components/common/contentPanel'
import pagination from '../../../components/common/pagination'
import panelModal from '../../../components/common/panelModal'
import appUseTable from '../../../components/App/appUseTable'
import {getClient} from '../../../utils/api/index'

export default {
  data(){
    return {
      title:{a:'App使用统计(分客户)',b:'分区域，RDC和客户统计App使用情况',c:'App管理查询',d:"App使用统计(分客户)"},
      subtitle:'查询面板',
      isShowModal:false,
      clientCode:'',
      clientCodeList:[
        {value: '选项1',label: '黄金糕'}, 
        {value: '选项2',label: '双皮奶'},
        {value: '选项3',label: '蚵仔煎'}, 
        {value: '选项4',label: '龙须面'}, 
        {value: '选项5',label: '北京烤鸭'}
      ],
      rdcCode:'',
      rdcCodeList:[
        {value: '选项1',label: '黄金糕'}, 
        {value: '选项2',label: '双皮奶'},
        {value: '选项3',label: '蚵仔煎'}, 
        {value: '选项4',label: '龙须面'}, 
        {value: '选项5',label: '北京烤鸭'}
      ],
      time:'',
      carrier:'',
      carrierList:[
        {value: '选项1',label: '黄金糕'}, 
        {value: '选项2',label: '双皮奶'},
        {value: '选项3',label: '蚵仔煎'}, 
        {value: '选项4',label: '龙须面'}, 
        {value: '选项5',label: '北京烤鸭'}
      ],
      city:'',
      cityList:[
        {value: '选项1',label: '黄金糕'}, 
        {value: '选项2',label: '双皮奶'},
        {value: '选项3',label: '蚵仔煎'}, 
        {value: '选项4',label: '龙须面'}, 
        {value: '选项5',label: '北京烤鸭'}
      ],
      clientResultList:[]
    }
  },
  mounted(){
    getClient()
    .then(res=>{
      this.clientResultList=res.data
      this.$refs.loadData.init(this.clientResultList)
    })
    // this.$http(this.Api.client)
    // .then(res=>{
    //   this.clientResultList=res.data
    //   this.$refs.loadData.init(this.clientResultList)
    // })
  },
   methods: {
    openModal(){
      this.isShowModal=!this.isShowModal
    },
    closeModal(){
      this.isShowModal=false
    }
  },
  components:{
    contentHeader,contentPanel,pagination,panelModal,appUseTable
  }
}

