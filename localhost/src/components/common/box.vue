<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in boxes" :key="index">
                <div class="box" >
                    <p>{{item.a}}</p>
                    <i class="iconfont" :class="item.c"></i>
                    <span>
                        {{item.b}}
                        <i class="iconfont icon-jiantou-you-cuxiantiao-fill"></i>
                    </span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            boxes:[
                {a:'Order Count',b:'More info',c:'icon-androidclipboard1'},
                {a:'Issue Qty',b:'More info',c:'icon-androidbar'},
                {a:'Issue Weight',b:'More info',c:'icon-locked'},
                {a:'Issue Volumn',b:'More info',c:'icon-androiddrafts'},
            ]
        }
    }
}
</script>
<style scoped>
p{
    margin: 0;
}
.box{
    margin-bottom: 20px;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background-color: #48BBB5;
    position: relative;
}
.box>p{
    padding:22px 10px;
    font-size: 15px;

}
.box>span{
    display: inline-block;
    width: 100%;
    padding: 5px 0;
    font-size: 14px;
    text-align: center;
    background: rgba(0,0,0,0.1);
    color: rgba(255,255,255,0.8);
    cursor: pointer;
}
.box>.iconfont{
    font-size: 90px;
    color: rgba(0,0,0,0.15);
    position: absolute;
    top: 5px;
    right:0;
    transition: all .5s;
}
.box:hover,.box>span:hover{
    color: #fff;
}
.box:hover>.iconfont{
    transform:scale(1.1);
}   
</style>
