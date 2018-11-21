<template>
    <div class="map_box">
        <div v-if="isShowMap">
            <div id='allmap'>

            </div>
            <div class="address_list">
                <div class="address" v-for="(item,index) in addressList" :key="index">
                    {{index+1}}、{{item.time}}，{{item.address}}
                </div>
            </div>
        </div>
        <div v-else>
            这个订单司机没有上传位置信息！请稍后再试！
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShowMap:true,
            addressList:[
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                // {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'}
            ]
        }
    },
    mounted(){
        if (this.addressList.length==0) {
            this.isShowMap=false
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.map_box,.map_box>div:first-child{
    display: flex;
    width: 100%;
    height: 100%;
}
#allmap{
    width: 75%;
    height: 700px;
}
.address_list{
    width: 25%;
    padding-left:15px; 
}
.address{
    font-size: 16px;
    margin-bottom: 10px;
}
</style>
