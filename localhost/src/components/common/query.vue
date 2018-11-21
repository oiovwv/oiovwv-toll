<template>
    <div>
        <div>
            <el-row>
                <el-col :span="12">
                    <div class="input_box">
                    <div>订单号码：</div>
                    <el-input
                        placeholder="输入订单号码查询"
                        v-model="orderNumber"
                        clearable>
                    </el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="input_box">
                    <div>OMS号：</div>
                    <el-input
                        placeholder="输入OMS号查询"
                        v-model="omsNumber"
                        clearable>
                    </el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-row>
                <el-col :span="12">
                    <div class="input_box">
                    <div>下单日期：</div>
                    <el-date-picker
                        v-model="date"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期" 
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="12" class="button_box">
                    <div>
                        <el-button @click="query">查询</el-button>
                        <el-button>导出CSV</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            orderNumber:'',
            omsNumber:'',
            date:''
        }
    },
    methods:{
      query(){
        console.log(this.orderNumber)
        console.log(this.omsNumber)
        console.log(this.date)
      }
    }
}
</script>
<style scoped>
.el-input,.el-range-editor.el-input__inner{
  width: 80%;
}
.input_box{
  padding: 0 15px;
}
.input_box>div:first-child{
  display: inline-block;
  color: #333;
  font-weight: 700;
}
.el-collapse{
  margin-bottom: 20px;
}
.panel .el-row:first-child{
  margin-bottom:15px; 
}
.button_box{
    width: 44.5%;
}
</style>
