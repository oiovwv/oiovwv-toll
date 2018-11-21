<template>
    <div>
        <div class="permission">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" 
          @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="checkedPermission" @change="handleCheckedPerChange">
            <el-checkbox v-for="per in permission" :label="per" :key="per">{{per}}</el-checkbox>
          </el-checkbox-group>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            checkAll:false,
            isIndeterminate:false,
            checkedPermission:[],
            permission:['0101-订单统计(发货订单数)', '0102-订单统计(发货数量)', '0103-订单统计(发货重量)', '0304-按月统计每个RDC在途预警的总数','sjgs','sdsf','sssas','sfsf','sfsfa','ssfsf','sfsdfs']
        }
    },

    methods:{
        handleCheckAllChange(val) {
          this.checkedPermission = val ? this.permission : [];
          this.isIndeterminate = false;
          // console.log(val)
          // console.log(this.checkedPermission)
        },
        handleCheckedPerChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.permission.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.permission.length
          // console.log(value)
          // console.log(this.checkedPermission)
        }
    }
    
}
</script>
<style scoped>
.permission{
  margin-bottom: 8px;
  overflow: hidden;
}
.el-checkbox{
  width: 46%;
  padding: 5px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 18px;
}
.el-checkbox:nth-child(odd){
  margin-right: 8px;
}
.el-checkbox+.el-checkbox{
  margin-left: 0;
}
.permission /deep/ .el-checkbox__inner:hover,
.permission /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, 
.permission /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner{
  border-color:#4CBAB4;
}
.permission /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, 
.permission /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background-color:#4CBAB4;
}
.permission /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
  color: #4CBAB4;
}
</style>
