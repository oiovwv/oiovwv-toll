<template>
    <div class="box">
        <el-row :gutter="20">
            <el-col :span="4">
                <div class="grid-content bg-purple circle">
                    <div>
                        <div>The Toll Way</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <div class="toll_way">
                        <p>The Toll Way</p>
                        <p>拓领的方式</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" v-for="(item, index) in menu" :key="index" class="row">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="tolls">
                        <p>{{item.a}}</p>
                        <p>{{item.b}}</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="12" :offset="1">
                <div class="grid-content bg-purple">
                    <div class="tollsd">
                        <p>{{item.c}}</p>
                        <p>{{item.d}}</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return {
            menu:[
                {a:'Satety',b:'安全',c:'Underpins everything we do',d:'安全是支撑我们每一个工作的基础'},
                {a:'Continuous improvement',b:'持续改进',c:'Delivering continuous improvement',d:'持续实现进步'},
                {a:'Being Open & transparent',b:'坦诚透明',c:'How we treat each other',d:'我们如何互相对待'},
                {a:'Teamwork',b:'团队协作',c:'One Toll.One Goal.',d:'一个拓领。一个目标。'},
                {a:'Integrity & trust',b:'正直与信任',c:'Behave ethically at all times',d:'时时刻刻保持有道德的行为'}
            ]
        }
    }
}
</script>
<style scoped>
.box{
    height: 100%;
    background: rgb(5,165,159);
    padding: 15px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
}
p{
    margin: 0;
    font-weight: bolder;
    font-size: 15px;
}
.el-row:first-child{
    margin-bottom: 70px;
}
.el-row.row{
    margin-top: 15px;
}
.circle{
    display: table;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border:2px solid #fff;
    text-align: center;
    font-size:15px; 
    padding: 12px;
    line-height: 22px;
    box-sizing: border-box;
}
.circle>div{
    display: table-cell;
    vertical-align: middle;
}
.toll_way>p:first-child{
    font-size: 28px;
    margin-bottom: 20px;
}
.toll_way>p:last-child{
    font-size: 20px
}
.tolls,.tollsd{
    height: 60px;
}
.tolls{
    border: 2px solid #fff;
    border-radius:40px; 
    box-sizing: border-box;
}
.tolls>p:first-child,.tollsd>p:first-child{
    line-height: 20px;
}
.tolls>p:first-child{
    margin-top: 8px;
}
.tollsd>p:first-child{
    margin-bottom: 15px;
}
.tollsd>p{
    font-size: 16px;
}
</style>
