<template>
  <div>
    <div class="display_header">
      <el-row>
        <el-col :span="3">
          <img src="../../../assets/images/logo.png" alt="">
        </el-col>
        <el-col :span="18">
          <div class="header_title">
            拓领环球物流（{{RDC}}）{{typeTxt}}
          </div>
        </el-col>
        <el-col :span="3">
         <div class="reback">
           返回主界面
         </div>
        </el-col>
      </el-row>
    </div>
    <div class="display_main">
      <div>
        <el-table :data="summaryTableData" border stripe>
          <el-table-column type="index" :index="indexMethod"></el-table-column>
          <el-table-column v-for="(item,index) in summaryTableHeader" :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      RDC:'',
      typeTxt:'',
      summaryTableHeader:[],
      summaryTableData:[
        {client:'COL',orderNum:'1515655',OMS:'1245454',transceiverType:'ISSUE',status:'close',
        deliveryCity:'',shipCity:'',orderReceivingDate:'',shipmentNum:'',putawayTime:'',remarks:''}
      ]
    }
  },
  mounted(){
    console.log(this.$route)
    this.RDC=this.$route.query.rdc
    switch(this.$route.query.type){
      case '1':
        this.typeTxt='发货即将延误订单'
        break
      case '2':
        this.typeTxt='收货即将延误订单'
        break
      case '3':
        this.typeTxt='拣货即将延误订单'
        break
      case '4':
        this.typeTxt='shangjia即将延误订单'
        break
      case '5':
        this.typeTxt='补货未完成任务'
        break
    }
    if(this.$route.query.type!='5'){
      this.summaryTableHeader=[
        {prop:'client',label:'客户',width:80},
        {prop:'orderNum',label:'订单号',width:110},
        {prop:'OMS',label:'OMS号',width:110},
        {prop:'transceiverType',label:'收发类型',width:100},
        {prop:'status',label:'状态',width:100},
        {prop:'deliveryCity',label:'发货城市',width:100},
        {prop:'shipCity',label:'收货城市',width:100},
        {prop:'orderReceivingDate',label:'订单接收日期',width:150},
        {prop:'shipmentNum',label:'装运编号',width:100},
        {prop:'putawayTime',label:'到库时间',width:150},
        {prop:'remarks',label:'备注',width:105}
      ]
    }else{
      this.summaryTableHeader=[
        {prop:'client',label:'客户',width:300},
        {prop:'SKU',label:'SKU',width:450},
        {prop:'entrepotLocationNum',label:'库位号',width:455}
      ]
    }
  },
  methods:{
    indexMethod(index){
      return ++index
    }
  }
}
</script>
<style scoped>
.display_header>.el-row{
  height: 50px;
  width: 100%;
  background: #007f7b;
}
.display_header>.el-row>.el-col{
  height: 100%;
}
.el-row>.el-col img{
  margin-top: 5px;
}
.header_title,.reback{
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  color: #fff;
}
.reback{
  cursor: pointer;
  font-size: 14px;
}
.reback:hover{
  background: rgb(117, 47, 6);
}
.el-table{
  width: 98%;
  margin:15px auto;
}
</style>
