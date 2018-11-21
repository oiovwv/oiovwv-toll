<template>
    <div>
        <content-header :content="title"></content-header>
        <div class="logistics_content shadow_box">
            <div>
                <div class="logistics_button" :class="activeIndex==index?'active':''" v-for="(item,index) in tab" :key="index" 
                @click="toggle(index,item.component)">
                    {{item.label}}
                </div>
            </div>
            <div>
                <div>
                    <step v-show="activeIndex==0"></step>
                    <order v-show="activeIndex==1"></order>
                    <epod v-show="activeIndex==2"></epod>
                    <map-component v-show="activeIndex==3"></map-component>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import contentHeader from '../common/contentHeader'
import mapComponent from './mapComponent'
import order from './order'
import epod from './epod'
import step from './step'
export default {
    data(){
        return {
            title:{a:'订单详情',b:'获取订单包括订单追踪、订单信息、epod、轨迹等在内的详细信息',
            c:'可视化预警/Pre-Alert',d:"订单详情"},
            tab:[
                {label:'物流详情'},
                {label:'订单'},
                {label:'EPOD'},
                {label:'追踪'}
            ],
            activeIndex:0
        }
    },
    mounted() {
        console.log(this.$route.params.omsNum) //获取路由跳转的参数
        this.ready()
    },
    components:{
        contentHeader,mapComponent,order,step,epod
    },
    methods:{
        ready(){
            this.$Common.initMap()
        },
        toggle(index){
            this.activeIndex=index
        }
    }
}
</script>
<style scoped>
.logistics_content{
    border-color:rgb(76,186,180);
    min-height: 300px;
    padding: 10px;
    margin-bottom: 10px;
}
.logistics_button{
    display: inline-block;
    width: 25%;
    text-align: center;
    font-size: 14px;
    padding: 10px 15px;
    cursor: pointer;
}
.logistics_content,.logistics_button{
    box-sizing: border-box;
}
.logistics_button.active{
    background: rgb(0,127,123);
    color:#ffffff;
}
.logistics_button:not(.active):hover{
    background: #f7f7f7;
}
.logistics_content>div:last-child,.logistics_content>div:last-child>div{
    height: 660px;
}
.logistics_content>div:last-child{
    margin-top: 15px;
    overflow-y: scroll;
}
</style>
