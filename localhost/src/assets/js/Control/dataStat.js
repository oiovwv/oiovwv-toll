import contentHeader from '../../../components/common/contentHeader'
import mainContent from '../../../components/layout/mainContent'

import {getStatData} from '../../../utils/api/index'

export default {
  data(){
    return {
      title:{a:'数据统计/Data Stat',b:'数据统计分析',c:'控制塔/Control Tower',d:"数据统计/Data Stat"},
      activeName:'1',
      date:'2018-9-26',
      selectValue:'WuHan',
      selectOptions:[
        {value: '选项1',label: '黄金糕'},
        {value: '选项2',label: '双皮奶'},
        {value: '选项3',label: '蚵仔煎'},
        {value: '选项4',label: '龙须面'},
        {value: '选项5',label: '北京烤鸭'}
      ],
      tHeader:['Item','Indicate','Definition','ITEM_NUM','ITEM_COUNT','Result','UNIT'],
      statData:[

      ]
    }
  },
  mounted(){
    document.getElementsByClassName('content_main')[0].style.marginBottom=0
    // this.$http(this.Api.statData)
    getStatData()
    .then(res=>{
      let newData = [];
      this.statData=this.$Common.array(res.data,newData)
      console.log(this.statData)
    })
  },
  methods: {
    
  },
  components:{
    contentHeader,mainContent
  }
}