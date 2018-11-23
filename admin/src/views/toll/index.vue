<template>
    <div class="main_content">
        <el-row class="row">
            <el-col :xs="{span:4}" :sm="{span:4,offset:1}" >
                <div class="circle">
                    <div>The Toll Way</div>
                </div>
            </el-col>
            <el-col :xs="{span:16,offset:3}" :sm="{span:8,offset:4}">
                <div class="toll_way">
                    <p>{{$t('tollWay.title')}}</p>
                </div>
            </el-col>
        </el-row>
        <el-row class="way" v-for="(item,index) in tollWay" :key="index">
            <el-col :xs="{span:24}" :md="{span:10,offset:1}">
                <div class="tolls">
                    <p>{{$t('tollWay.'+item.left)}}</p>
                </div>
            </el-col>
            <el-col :xs="{span:24}" :md="{span:11,offset:2}">
                <div>
                    <p>{{$t('tollWay.'+item.right)}}</p>
                </div>
            </el-col>
        </el-row>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            tollWay:[
                {left:'satefy',right:'satefyInfo'},
                {left:'improve',right:'improveInfo'},
                {left:'frankly',right:'franklyInfo'},
                {left:'team',right:'teamInfo'},
                {left:'trust',right:'trustInfo'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
$color:rgb(5,165,159);
.main_content{
    .row{
        margin-bottom: 50px;
    }
    .circle{
        width: 85px;
        height: 85px;
        border: 2px solid $color;
        border-radius: 50%;
        padding: 10px;
        font-size: 18px;
        text-align: center;
        color: $color;
        line-height: 20px;
        >div{
            display: table-cell;
            vertical-align: middle;
        }
    }
    .toll_way{
        font-weight: bolder;
    }
    .toll_way>p{
        text-align: center;
        color: $color;
        font-size: 28px;
    }
    .way p{
        margin:0;
        line-height: 45px;
        font-size: 18px;
        text-align: center;
        color: $color;
        margin: 8px 0
    }
    .tolls p{
        border: 1px solid $color;
        border-radius: 40px;
    }
}
</style>
