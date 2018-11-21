<template>
    <div class="errPage-container">
        <el-row>
            <el-col :xs="{span:24,offset:2}">
                <el-button @click="goBack">返回</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="{span:20 ,offset:2}" :sm="{span:10,offset:2}">
                <h1 class="text-jumbo text-ginormous">Oops!</h1>
                <h2>您还没有权限去该页面</h2>
                <h6>如有疑问请联系管理员</h6>
                <ul class="list-unstyled">
                    <li>或者你可以去:</li>
                    <li class="link-type">
                        <router-link to="/toll">回首页</router-link>
                    </li>
                    <li class="link-type"><a href="https://www.taobao.com/" target="_blank">随便看看</a></li>
                    <li><a href="#" @click.prevent="dialogVisible=true">点我看图</a></li>
                </ul>
            </el-col>
            <el-col :xs="{span:20,offset:2}" :sm="{span:10,offset:2}" class="img_responsive">
                <img :src="errGif" alt="Girl has dropped her ice cream">
            </el-col>
        </el-row>
        <el-dialog :visible.sync="dialogVisible" title="随便看">
            <img :src="ewizardClap" class="pan-img">
        </el-dialog>
    </div>    
</template>
<script>
import errGif from '../../assets/images/401.gif'
export default {
    data(){
        return {
            dialogVisible:false,
            ewizardClap:'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
            errGif:errGif+'?'+ new Date()
        }
    },
    methods:{
        goBack(){
            console.log(this.$route)
            console.log(this.$router)
            if(this.$route.query.noBack){
                this.$router.push('/toll')
            }else{
                this.$router.go(-1)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.errPage-container{
    width: 880px;
    max-width: 100%;
    margin: 50px auto;
    .text-jumbo {
        font-size: 60px;
        font-weight: 700;
        color: #484848;
    }
    .img_responsive{
        text-align: center;
        img{
            width: 75%;
        }
    }
    .pan-img{
        width: 100%;
    }
    .list-unstyled {
        font-size: 14px;
        li {
            padding-bottom: 5px;
        }
        a {
            color: #008489;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
