import {getVisual} from '../../../utils/api/index'
import weatherDialog from '../../../components/common/weatherDialog'

export default {
    data(){
      return {
        rdc:'',
        site:'上海松江',
        nowTime:null,
        visualTableData:[],
        weatherTableData:[],
        pageSize:9,
        pageCount:0,
        currentPage:1,
        totalA:0,
        totalB:0,
        totalC:0,
        totalD:0,
        totalE:0,
        totalF:0,
        totalG:0,
        totalH:0,
        totalI:0,
        totalJ:0,
        totalK:0,
        totalL:0,
        totalM:0,
        totalN:0,
        timer:null,
        dialogWeather:false
      }
    },
    components:{weatherDialog},
    computed:{
      date(){
        let today=new Date()
        let year=today.getFullYear()
        let week=today.getDay()
        let month=this.checkTime(today.getMonth()+1)
        let date=this.checkTime(today.getDate())
        let day
        switch(week){
          case 0:
            day="星期日";
            break;
          case 1:
            day="星期一";
            break;
          case 2:
            day="星期二";
            break;
          case 3:
            day="星期三";
            break;
          case 4:
            day="星期四";
            break;
          case 5:
            day="星期五";
            break;
          case 6:
            day="星期六";
            break;
        }
        let str=year+'年'+month+'月'+date+'日'+'('+day+')'
        return str
      },
      year(){
        return new Date().getFullYear()
      },
    },
    mounted(){
      document.getElementsByClassName('main')[0].style.height=document.body.clientHeight-112+'px'
      // 获取路径参数
      this.rdc=this.$route.params.RDC
      switch(this.rdc){
        case 'STA GUANGZHOU1':
          this.site="广州云埔"
          break
        case 'STA SHANGHAI5':
          this.site="上海松江"
          break
      }
      // 自动切换
      setInterval(()=>{
        this.currentPage++
        if(this.currentPage>this.pageCount){
          this.currentPage=1
        }
      },10000)
      // 时间
      this.nowTimes()
      // 初始化
      this.init()
      // 刷新数据
      if(this.timer){
        clearInterval(this.timer)
      }else{
        this.timer=setInterval(()=>{
          this.init()
        },30000)
      }
    },
    destroyed(){
      clearInterval(this.timer)
    },
    methods:{
      init(){
        getVisual(this.rdc).then(res=>{
          this.visualTableData=res.data
          this.pageCount=Math.ceil(this.visualTableData.length/this.pageSize)
          this.totalA=this.totalB=this.totalC=this.totalD=this.totalE=this.totalF=this.totalG=
          this.totalH=this.totalI=this.totalJ=this.totalK=this.totalL=this.totalM=this.totalN=0
          this.visualTableData.forEach((item,index)=>{
            this.totalA+=item.iPossibleDelayed
            this.totalB+=item.iOnTrack
            this.totalC+=item.rPossibleDelayed
            this.totalD+=item.rOnTrack
            this.totalE+=item.pkPossibleDelayed
            this.totalF+=item.pkOnTrack
            this.totalG+=item.pwPossibleDelayed
            this.totalH+=item.pwOnTrack
            this.totalI+=item.rpPossibleDelayed
            this.totalJ+=item.iTotal
            this.totalK+=item.rTotal
            this.totalL+=item.pkTotal
            this.totalM+=item.pwTotal
            this.totalN+=item.rpTotal
          })
        })
      },
      currentChange(val){
        this.currentPage=val
      },
      trafficWeather(){
        this.$Common.seeTrafficWeather()
      },
      lookWeather(){
        this.dialogWeather=true
      },
      closeWeatherDialog(){
        this.dialogWeather=false
      },
      checkTime(val){
        return val=val<10?('0'+val):val
      },
      timeFormate(timeStamp) {
        let hour=new Date(timeStamp).getHours()
        let minutes=this.checkTime(new Date(timeStamp).getMinutes())
        let seconds=this.checkTime(new Date(timeStamp).getSeconds())
        this.nowTime = hour+":"+minutes+":"+seconds
      },
      nowTimes(){
        this.timeFormate(new Date())
        setTimeout(this.nowTimes,500)
      },
      toDisplayView(client,rdc,type){
        this.$router.push({
          path:'/displayView',
          query:{
            client:client,
            rdc:rdc,
            type:type
          }
        })
      }
    }
  }