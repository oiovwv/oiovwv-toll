<template>
    <div class="step_container">
        <el-row v-for="(item,index) in steps" :key="index">
            <el-col :xs="{span:8}" :sm="{span:3}" class="step_left">
                <div>{{item.date}}</div>
                <i class="iconfont icon-truck"></i>
                <div class="line"></div>
            </el-col>
            <el-col :xs="{span:16}" :sm="{span:21}" class="step_right">
                <div>
                    <span>{{item.label}}</span>
                    <span>
                        <i class="iconfont icon-clock"></i>
                        {{item.time}}
                    </span>
                </div>
                <div>
                    <div>
                        {{item.detail}}
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            steps:[
                {date:'2018-09-12',time:'14:30',label:'出库',detail:'订单已送到收货人处，收货人已签收'},
                {date:'2018-09-12',time:'14:30',label:'交付确认',detail:'订单已送到收货人处，收货人已签收'},
                {date:'2018-09-12',time:'14:30',label:'新建订单',detail:'订单已送到收货人处，收货人已签收'},
                {date:'2018-09-12',time:'14:30',label:'出库',detail:'订单已送到收货人处，收货人已签收'},
                {date:'2018-09-12',time:'14:30',label:'出库',detail:'订单已送到收货人处，收货人已签收'},
                {date:'2018-09-12',time:'14:30',label:'出库',detail:'订单已送到收货人处，收货人已签收'},
                {date:'2018-09-12',time:'14:30',label:'出库',detail:'订单已送到收货人处，收货人已签收'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.step_container{
    >.el-row{
        margin-bottom: 8px;
    }
    .step_left{
        text-align: center;
        .iconfont{
            display: inline-block;
            width:30px;
            height: 30px;
            line-height: 30px;
            background: #0073b7;
            border-radius: 50%;
            color: #fff;
            margin-top: 15px;
        }
        >div:first-child{
            background: #dd4b39;
            color: #fff;
            padding: 5px;
            border-radius: 4px;
        }
        .line{
            width: 6px;
            height:125px;
            background: #ddd;
            border-radius: 2px;
            margin: -45px auto 0; 
        }
    }
    .step_right{
        height: 150px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        border-radius:3px; 
        padding: 15px 0;
        box-sizing: border-box;
        >div:first-child{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #f4f4f4;
        }
        >div:first-child>span:first-child{
            color:rgb(0,127,123);
        }
        >div:first-child>span:last-child{
            color: #999;
        }
        >div:last-child>div{
            border: 1px solid #ccc;
            border-radius: 4px;
            background: #f5f5f5;
            margin-top: 6px;
        }
    }
}
.step_right>div,.step_right>div:last-child>div{
    padding: 10px;
}
.step_right>div:first-child>span:first-child,.step_left>div:first-child{
    font-size: 14px;
    font-weight: 600;
}
</style>
