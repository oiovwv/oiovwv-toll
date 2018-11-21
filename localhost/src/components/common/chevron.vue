<template>
    <div>
        <div class="sub_title">
            <h3>{{name}}</h3>
            <el-row>
                <el-col :span="24">
                    <div>
                        <p>{{operateTime}}：</p>
                        <el-date-picker
                      v-model="time"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                        </el-date-picker>
                        <el-button type="primary" icon="el-icon-search" size='mini'>Search</el-button>
                        <el-button type="primary" icon="el-icon-search" size='mini'>下载数据</el-button>
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
           input:''
        }
    },
    props:{
        name:{
            type:String
        },
        time:{
            type:String
        },
        operateTime:{
            type:String
        }
    },
}
</script>
<style scoped>
h3,p{
    margin: 0;
}
h3{
    margin:5px 0;
}
.el-row .el-range-editor{
    width: 25%;
}
.el-table{
    margin:0 auto;
}
.el-collapse-item__wrap{
    padding: 10px;
}
.sub_title p{
    display: inline-block
}
.el-button{
    margin-left:10px; 
}
.el-button--primary{
    color:#666;
    padding:7px 10px;
    border-color: #bbb;
    background:linear-gradient(to bottom,#ffffff 0,#e6e6e6 100%) ;
}
.el-button--primary:hover{
    border-color:#ddd;
    background: #e6e6e6;
    color: #00438a; 
}
</style>
