<template>
    <div class="order_info">
        <div class="info_box">
            <div v-for="(item,index) in orderInfo" :key="index" class="info" :class="index==3||index==6?'active':''">
                <span>{{item.name}}：</span>
                <span>{{item.info}}</span>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    data(){
        return {
            orderInfo:[
                {name:'订单编号',info:'福建省关键时刻结果还是看'},
                {name:'客户单号',info:'福建省关键时刻结果还是看'},
                {name:'分公司',info:'福建省关键时刻结果还是看'},
                {name:'收发类型',info:'福建省关键时刻结果还是看'},
                {name:'收货人代码',info:'福建省关键时刻结果还是看'},
                {name:'收货人名称',info:'福建省关键时刻结果还是看'},
                {name:'收货地址',info:'福建省关键时刻结果还是看'},
                {name:'备注说明',info:'福建省关键时刻结果还是看'},
                {name:'订单总数',info:'福建省关键时刻结果还是看'},
                {name:'总重量',info:'福建省关键时刻结果还是看'},
                {name:'总体积',info:'福建省关键时刻结果还是看'}
            ]
        }
    }
}
</script>
<style scoped>
.info_box{
    color: rgb(0,127,123);
    font-size: 14px;
    width: 99%;
}
.info_box>div{
    padding: 7px 10px;
}
.info_box>div>span:first-child{
    font-weight: 600;
}
.info.active{
    padding-bottom: 35px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f4f4f4;
}
</style>
