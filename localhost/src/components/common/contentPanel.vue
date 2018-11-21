<template>
    <div>
        <div class="panel shadow_box">
            <div class="panel_header">
                <div>{{subtitle}}</div>
                <div>
                    <el-button :icon="isOpenPanel?'el-icon-remove-outline':'el-icon-circle-plus-outline'" size="small" 
                    @click="openPanel"
                    >{{isOpenPanel?'关闭':'打开'}}查询面板</el-button>
                    <el-button icon="el-icon-refresh" size="small">刷新</el-button>
                    <el-button icon="el-icon-more-outline" size="small" 
                    @click="openModal"
                    >更多</el-button>
                </div>
            </div>
            <div class="panel_content" :class="isOpenPanel?'active':''">
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    data(){
        return {
            isOpenPanel:false,
            isOpenModal:false
        }
    },
    props:{
        subtitle:{
            type:String
        }
    },
    methods:{
        openPanel(){
            this.isOpenPanel=!this.isOpenPanel
        },
        openModal(){
            this.$emit('openModal')
        }
    },
    components:{}
}
</script>
<style>
.panel{
    border-color:#4cbab4;
    margin-bottom: 10px;
}
.panel_header{
    height: 30px;
    padding: 10px;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    justify-content:space-between;
    border-bottom: 1px solid #f4f4f4;
}
.panel_header .el-button{
    padding: 7px 15px;
}
.panel_content{
    width: 100%;
    max-height: 0;
    overflow: hidden;
    box-sizing: border-box;
}
.panel_content>div{
    padding: 10px;
}
.panel_content.active{
    max-height:500px; 
}
.panel_content,.panel_content.active{
    transition: all .8s ease-in;
}
</style>
