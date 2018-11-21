import contentHeader from '../../../components/common/contentHeader'
import mainContent from '../../../components/layout/mainContent'

import {getEditData,getSave} from '../../../utils/api/index'

export default {
  data() {
    return {
      title:{a:'数据编辑/Data Edit',b:'数据手工编辑',c:'控制塔/Control Tower',d:"数据编辑/Data Edit"},
      activeName:'1',
      date:'2018-9-26',
      RDCSelectValue:'STA BEIJING',
      RDCSelectOptions:[
        {label: '选项1',value: '黄金糕'},
        {label: '选项2',value: '双皮奶'},
        {label: '选项3',value: '蚵仔煎'},
        {label: '选项4',value: '龙须面'},
        {label: '选项5',value: '北京烤鸭'}
      ],
      tHeader:[
        {prop:'ITEM_SORT',label:'Item',width:'60'},
        {prop:'ITEM_NAME',label:'Indicate',width:'260'},
        {prop:'ITEM_DESC',label:'Definition',width:'300'},
        {prop:'ITEM_NUM',label:'ITEM_NUM',width:'118'},
        {prop:'ITEM_COUNT',label:'ITEM_COUNT',width:'120'},
        {prop:'e',label:'Result',width:'100'},
        {prop:'ITEM_UNIT',label:'UNIT',width:'100'},
        {prop:'ITEM_UNIT',label:'操作',width:'100'}
      ],
      editData:[
        
      ],
      input10:''
    }
  },
  mounted(){
    document.getElementsByClassName('content_main')[0].style.marginBottom=0
    this.date=new Date().toLocaleDateString().replace(/\//g,'-')
    // this.$http(this.Api.editData)
    getEditData()
    .then(res=>{
      let newData = [];
      this.editData=this.$Common.array(res.data,newData)
    })
  },
  methods: {
    // 保存
    handleClick(id,num,count){
      console.log("要保存的ID及参数为："+id,num,count)
      // this.$http(this.Api.save)
      getSave()
      .then(res=>{
        if(res.status==200){
          this.$notify({
            title: '成功',
            message: '保存成功',
            type: 'success',
            duration:1500
          });
        }
      })
    },
    // 解锁
    unLock(id){
      console.log("要解锁的ID为："+id)
      this.$confirm('确定要解锁吗？是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$notify({
          title: '成功',
          message: '解锁成功',
          type: 'success',
          duration:1500
        });
      }).catch(() => {
        this.$notify({
          title: '警告',
          message: '已取消解锁操作',
          type: 'warning',
          duration:1500
        });       
      })
    },
    query(date,value){
      let day=date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
      console.log(day,value)
    },
    blur(val){
      if(parseFloat(val).toString()=="NaN" || val<=0){
        this.$notify.error({
          title: '错误',
          message: '请输入合理的值',
          duration:1500
        });
        return false
      }else{
        return true
      }
    }
  },
  components:{
    contentHeader,mainContent
  }
}

