<template>
    <div>
        <el-table
            :data="tableData.slice((currPage - 1) * pageSize,currPage * pageSize)"
            border 
            stripe 
            highlight-current-row 
            @current-change="handleCurrentChange" 
            style="width:98%;margin:0 auto;">
            <el-table-column v-for="(item,index) in tableHeader" :key="index"
            :prop=item.prop
            :label=item.label
            :width=item.width>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentRow: null
        }
    },
    props:{
       tableData:{
           type:Array
       },
       tableHeader:{
           type:Array
       },
       currPage:{
        type:Number,
        default:1
       },
       pageSize:{
        type:Number,
        default:15
       }
    },
    methods:{ 
        handleCurrentChange(val) {
            this.currentRow = val;
        }
    }
}
</script>
<style scoped>

</style>
