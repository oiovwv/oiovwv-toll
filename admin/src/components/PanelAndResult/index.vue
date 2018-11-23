<template>
    <div>
        <div class="panel_box boxes">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item name="1">
                    <template slot="title">
                        查询面板
                    </template>
                    <slot name="condition"></slot>
                </el-collapse-item>
            </el-collapse>
            <!-- <div class="panel_title">查询面板</div>
            <div class="condition">
                <slot name="condition"></slot>
            </div> -->
        </div>
        <div class="result_box boxes">
            <div class="result_title">查询结果</div>
            <div class="result_body">
                <slot name="result"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            activeName:"1"
        }
    }
}
</script>
<style lang="scss" scoped>
.boxes{
    .el-collapse{
        border-top: none;
    }
    .result_title,/deep/ .el-collapse-item__header{
        height: 40px;
        font-size: 16px;
        border-bottom: 1px solid #f4f4f4;
    }
    /deep/ .el-collapse-item__header,
    /deep/ .el-collapse-item__arrow{
        line-height: 20px;
    }
    .result_title,.result_body,
    /deep/ .el-collapse-item__header,
    /deep/ .el-collapse-item__content{
        padding: 10px;
    }
    /deep/ .el-collapse-item__content{
        padding-bottom: 0;
    }
}
.panel_box{
    border-color: #4cbab4; 
}
.result_box{
    border-color: #d2d6de;
}
</style>
