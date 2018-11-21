import contentHeader from '../../../components/common/contentHeader'
import mainContent from '../../../components/layout/mainContent'
export default {
  data() {
    return {
      title:{a:'CT各项目年统计图表的平均值',b:'各项目年统计图表的平均值',
        c:'控制塔/Control Tower',d:"CT各项目年统计图表的平均值"},
      selectValue:'',
      selectOptions:[
        {label: '选项1',value: '黄金糕'},
        {label: '选项2',value: '双皮奶'},
        {label: '选项3',value: '蚵仔煎'},
        {label: '选项4',value: '龙须面'},
        {label: '选项5',value: '北京烤鸭'}
      ],
      RDCValue:'',
      RDCList:[
        {label:'一',value:'songjiang'},
        {label:'二',value:'wuhan'},
        {label:'三',value:'beijing'},
        {label:'四',value:'xiaogan'},
        {label:'五',value:'shenzhen'},
        {label:'六',value:'guangzhou'},
        {label:'七',value:'hefei'},
        {label:'八',value:'hanchuan'},
      ],
      header:[
        {prop:'rdc',label:'rdc',width:'300'},
        {prop:'statisticalItem',label:'statisticalItem',width:'500'}
      ],
      CTResult:[
        
      ],
      isShowHeader:false,
      echartsOptions:{
        tooltip: {},
        color:['#00FFFF','#FF6347','#8A2BE2','#7FFF00','#006400','#FF1493','#FFD700','#20B2AA','#00FF00'],
        grid:{
          show:true
        },
        legend: {
          type: 'scroll',
          top:15,
          data:[]
        },
        // formatter:function(rdc){
        //     let stat
        //     for(let i=0;i<data.length;i++){
        //       if(data[i].rdc==rdc){
        //         stat=data[i].statisticalItem
        //       }
        //     }
        //     return rdc+'<br />'+stat
        // },
        toolbox:{
          show:true,
          feature: {
              dataView: {readOnly: false},
              saveAsImage: {}
          }
        },
        xAxis: {
          data: ['01','02','03','04','05','06','07','08','09','10','11','12']
        },
        yAxis: {},
        series: [

        ]
      }
    }
  },
  mounted(){
    // document.getElementsByClassName('ct_box')[0].style.height=document.body.clientHeight-73+'px'
  },
  methods: {
    init(){
      // 基于准备好的dom，初始化echarts实例
      let CTChart = this.$echarts.init(document.getElementById('CTChart'))
      // 绘制图表
      CTChart.showLoading()
      setTimeout(()=>{
        CTChart.hideLoading()
      },1500)
      return CTChart
    },
    addTableData(val1,val2){
      let object=new Object()
      object.rdc=val1
      object.statisticalItem=val2
      this.CTResult.push(object)
      let res=[]
      for(var i=0;i<this.CTResult.length;i++){
        var flag=true
        for(var j=0;j<res.length;j++){
          if(this.CTResult[i].rdc==res[j].rdc&&this.CTResult[i].statisticalItem==res[j].statisticalItem){
            this.$notify({
              title: '警告',
              message: '请勿重复添加',
              type: 'warning',
              position: 'top-left'
            });
            flag=false
          }
        }
        if(flag){
          res.push(this.CTResult[i])
        }
      }
      this.CTResult=res
    },
    handleDelete(index){
      this.CTResult.splice(index,1)
    },
    lineChart(index){
      // let legendObj=new Object()
      // legendObj.rdc=this.CTResult[index].rdc
      // legendObj.statisticalItem=this.CTResult[index].statisticalItem
      this.echartsOptions.legend.data.push(this.CTResult[index].rdc)
      // console.log(this.echartsOptions.legend)
      let object=new Object()
      object.name=this.CTResult[index].rdc
      object.type="line"
      object.data=[1,0,0.5,1,3,1,2,16,8,251,52,6]
      this.echartsOptions.series.push(object)
      this.init().setOption(this.echartsOptions)
    },
    barChart(index){
      this.echartsOptions.series[index].type='bar'
      this.init().setOption(this.echartsOptions)
    }
  },
  components:{
    contentHeader,mainContent
  }
}

