<template>
    <div class="pagination_container">
        <el-pagination 
            :background="background" 
            :small="small"
            :current-page.sync="currentPage"
            :page-size.sync="pageSize"
            :page-sizes="pageSizes"
            :layout="layout"
            :total="total" 
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name:'Pagination',
    props:{
        // 默认的当前页与页显示数量
        limit:{
            type:Number,
            default:10
        },
        page:{
            type:Number,
            default:1
        },
        background:{
            type:Boolean,
            default:true
        },
        small:{
            type:Boolean,
            default:false
        },
        pageSizes:{
            type:Array,
            default(){
                return [10,20]
            }
        },
        total:{
            required:true,
            type:Number
        },
        layout:{
            type:String,
            default:'total, sizes, prev, pager, next, jumper'
        }
    },
    computed:{
        currentPage:{
            get(){
                return this.page
            },
            set(val){
                this.$emit('update:page',val)
            }
        },
        pageSize:{
            get(){
                return this.limit
            },
            set(val){
                this.$emit('update:limit',val)
            }
        }
    },
    methods:{
        handleSizeChange(val){
            this.$emit('')
        },
        handleCurrentChange(val){

        }
    }
}
</script>
<style lang="scss" scoped>
.pagination_container{
    text-align: center;
    margin: 30px 0 20px;
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #05a59f;
    }
}
</style>

