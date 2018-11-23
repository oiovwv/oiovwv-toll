<template>
    <div class="order_info">
        <el-row>
            <el-col :xs="{span:24}">
                <div class="info_box" v-for="(item,index) in orderInfo" :key="index" :class="index==3||index==6?'active':''">
                    <div>{{item.label}}：</div>
                    <div :title="item.info">{{item.info}}</div>    
                </div>    
            </el-col>
        </el-row>    
    </div>
</template>
<script>
export default {
    data(){
        return {
            orderInfo:[
                {label:'订单编号',info:'福建省关键时刻结果还是看'},
                {label:'客户单号',info:'福建省关键时刻结果还是看'},
                {label:'分公司',info:'福建省关键时刻结果还是看'},
                {label:'收发类型',info:'福建省关键时刻结果还是看'},
                {label:'收货人代码',info:'福建省关键时刻结果还是看'},
                {label:'收货人名称',info:'福建省关键时刻结果还是看是刚看过考试的结果大家发挥你的房间客户打飞机看好你的放开计划'},
                {label:'收货地址',info:'福建省关键时刻结果还是看'},
                {label:'备注说明',info:'福建省关键时刻结果还是看'},
                {label:'订单总数',info:'福建省关键时刻结果还是看'},
                {label:'总重量',info:'福建省关键时刻结果还是看'},
                {label:'总体积',info:'福建省关键时刻结果还是看'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.info_box{
    display: flex;
    color: rgb(0,127,123);
    font-size: 14px;
    padding: 8px 10px;
    >div:first-child{
        font-weight: 600;
        width: 90px;
    }
    >div:last-child{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.info_box.active{
    padding-bottom: 35px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f4f4f4;
}
</style>