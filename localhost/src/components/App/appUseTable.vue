<template>
    <div>
        <el-table
            :data="AppTableData"
            border 
            highlight-current-row
            style="width:98%;margin:0 auto;">
            <el-table-column v-for="(item,index) in AppTableHeader" :key="index"
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
            AppTableHeader:[
                {prop:'RDCCode',label:'代码',width:'170'},
                {prop:'AppArrived',label:'轨迹订单数',width:'100'},
                {prop:'AppDelivery',label:'订单总数',width:'90'},
                {prop:'AppEPOD',label:'到达订单数',width:'100'},
                {prop:'AppTrace',label:'应到达总数',width:'100'},
                {prop:'ArrivedCount',label:'交付订单数',width:'100'},
                {prop:'ArrivedRate',label:'应交付总数',width:'100'},
                {prop:'DeliveryCount',label:'EPOD订单数',width:'105'},
                {prop:'DeliveryCount',label:'应EPOD总数',width:'105'},
                {prop:'DeliveryRate',label:'轨迹率',width:'70'},
                {prop:'EPODCount',label:'到达率',width:'70'},
                {prop:'EPODRate',label:'交付率',width:'87.9'},
                {prop:'OrderCount',label:'EPOD率',width:'80'}
            ],
        }
    },
    mounted(){
        
    },
    props:{
        AppTableData:{
            type:Array,
            default:[]
        }
    },
    methods:{
        init(list){
            list.forEach((item,index) => {
                if(item.RDCCode=="华南"||item.RDCCode=="华北"||item.RDCCode=="华东"){
                    this.$nextTick(()=>{
                        document.getElementsByClassName('el-table__row')[index].style.cssText="background:rgb(2, 189, 188);color:#fff;"
                        document.getElementsByClassName('el-table__row')[index].classList.add("highlight")
                    })
                }else if(item.RDCCode.indexOf('STA')!=-1){
                    this.$nextTick(()=>{
                        document.getElementsByClassName('el-table__row')[index].style.cssText="font-weight:bold;"
                    })
                }
            });
        }
    }
}
</script>