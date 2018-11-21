<template>
    <div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="cPage"
            :page-sizes="[20, 30, 40]"
            :page-size="pSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalNum">
        </el-pagination>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            pSize:this.pageSize,
            cPage:this.currentPage
        }
    },
    watch:{
        pageSize(val){
            this.pSize=val
        },
        pSize(val){
            this.$emit('sizechange',val)
        },
        currentPage(val){
            this.cPage=val
        },
        cPage(val){
            this.$emit('currentchange',val)
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pSize=val
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.cPage=val
            console.log(`当前页: ${val}`);
        }
    },
    props:{
        totalNum:{
            type:Number
        },
        pageSize:{
            type:Number,
            default:20
        },
        currentPage:{
            type:Number,
            default:1
        }
    }
}
</script>
<style scoped>
.el-pagination{
  text-align: center;
  margin-bottom: 15px;
}
.el-pagination>.el-pagination__total:first-child{
  line-height: 32px;
}
</style>
