<template>
    <div v-show="isShowModal">
        <div class="mask"></div>
        <div class="modal_content">
            <div class="modal_header">
                <h3>创建审计任务</h3>
                <i class="el-icon-close" @click="close"></i>
            </div>
            <div class="modal_main">
                <div>
                    <slot></slot>
                </div>
            </div>
            <div class="modal_footer">
                <el-button type="primary" icon="el-icon-check" size="mini">保存</el-button>
                <el-button type="primary" icon="el-icon-close" size="mini" 
                @click="close"
                >取消</el-button>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    mounted() {
        
    },
    methods:{
        close(){
            this.$emit('closeModal')      
        }
    },
    props:{
        isShowModal:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style scoped>
h3{
    margin: 0;
    font-weight: 400;
}
.mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
}
.modal_content{
    position: absolute;
    margin: auto;
    z-index: 1000;
    width: 85%;
    height: 800px;
    background: #fff;
    border-radius: 5px;
}
.mask,.modal_content{
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
}
.modal_header{
    font-size: 14px;
    color: #444;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #f4f4f4;
}
.modal_header,.modal_footer{
    height: 25px;
    line-height: 25px;
    padding: 10px;
}
.modal_header>i{
    cursor: pointer;
    margin-top: 6px;
}
.modal_main{
    height: 708px;
    overflow-y: scroll;
}
.modal_footer{
    border-top:1px solid #f4f4f4;
    text-align: right
}
.modal_footer .el-button{
    padding: 5px 15px;
    background: #4CBAB4;
    border-color: #4CBAB4;
}
</style>
