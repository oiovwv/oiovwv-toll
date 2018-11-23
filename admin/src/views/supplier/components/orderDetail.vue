<template>
    <div class="main_content">
        <div class="boxes order_detail_container">
            <el-row>
                <el-col :xs="{span:24}" :sm="{span:6}" v-for="(item,index) in detailButtons" :key="index">
                    <el-button :class="activeIndex===index?'active':''" @click="toggleMenu(index)">{{item.label}}</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="{span:24}">
                    <div class="detail_content">
                        <step v-show="activeIndex===0"></step>
                        <order v-show="activeIndex===1"></order>
                        <epod v-show="activeIndex===2"></epod>
                        <map-component v-show="activeIndex===3"></map-component>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import Step from './step'
import Order from './order'
import Epod from './epod'
import MapComponent from './mapComponent'
import {getMap} from '@/utils/index'
export default {
    data(){
        return {
            detailButtons:[
                {label:'物流详情'},
                {label:'订单'},
                {label:'EPOD'},
                {label:'追踪'}
            ],
            activeIndex:0
        }
    },
    components:{
        Step,Order,Epod,MapComponent
    },
    mounted(){
        this.initMap()
    },
    methods:{
        initMap(){
            getMap()
        },
        toggleMenu(index){
            this.activeIndex=index
        }
    }
}
</script>
<style lang="scss" scoped>
$white:#fff;
$themeColor:#4cbab4;
.order_detail_container{
    border-color: $themeColor;
    padding: 10px;
    margin: 0;
    min-height: 500px;
    .el-button{
        width: 100%;
        background: $white;
        color: #000;
        border-color: $white;
        margin-bottom: 5px;
    }
    .el-button.active{
        background: $themeColor;
        border-color:$themeColor;
        color: $white; 
    }
    .el-button:not(.active):hover{
        background: #f7f7f7;
    }
    .detail_content{
        margin-top: 10px;
    }
}
</style>
