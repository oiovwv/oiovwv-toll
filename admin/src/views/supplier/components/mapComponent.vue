<template>
    <div class="map_container">
        <div v-if="isShowMap">
            <el-row>
                <el-col :xs="{span:24}" :sm="{span:17}">
                    <div id='addressMap'></div>
                </el-col>
                <el-col :xs="{span:24}" :sm="{span:7}">
                    <div class="address_list">
                        <div v-for="(item,index) in addressList" :key="index">
                            {{index+1}}、{{item.time}}，{{item.address}}
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div v-else>
            <el-row>
                <el-col :xs="{span:24}">
                    <div>这个订单司机没有上传位置信息！请稍后再试！</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShowMap:true,
            addressList:[
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'},
                {address:'湖北省武汉市工商根深蒂固回事',time:'2018*--454546-54'}
            ]
        }
    },
    mounted(){
        if (this.addressList.length===0) {
            this.isShowMap=false
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.map_container{
    #addressMap{
        width: 100%;
        min-height: 500px;
    }
    .address_list{
        padding-left:10px;
        >div{
            font-size: 15px;
            line-height: 22px;
        }
    }
    .address_list>div,#addressMap{
        margin-bottom: 8px
    }
    
}
</style>
