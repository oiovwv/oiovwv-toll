<template>
    <div>
        <el-popover
        placement="bottom"
        width="280"
        trigger="click" style="padding:0;">
        <div class="user_header">
            <img src="../../assets/images/user.jpg" alt="">
            <p>{{uname}}  -  toll</p>
        </div>
        <div class="user_footer">
            <el-button size="small">Profile</el-button>
            <el-button size="small" @click="SignOut">Sign out</el-button>
        </div>
        <el-button slot="reference">
            <img src="../../assets/images/user.jpg" alt="">
            <span>{{uname}}</span>
        </el-button>
        </el-popover>
    </div>    
</template>
<script>
import Cookie from 'js-cookie'
export default {
    name:'user',
    data(){
        return {}
    },
    props:{
        uname:{
            type:String,
            default:''
        }
    },
    methods:{
        SignOut(){
            Cookie.remove('Token')
            this.$store.state.token=''
            this.$router.replace('/')
        }
    }
}
</script>
<style scoped>
.el-button.el-button--default.el-popover__reference{
    border: none;
    height: 40px;
    border-radius: 0;
    background: rgb(0,127,123);
    color: #fff;
    letter-spacing: 2px;
}
.el-button.el-button--default.el-popover__reference:hover{
    background: rgba(0,0,0,0.1);
}
.el-button img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    vertical-align: middle;
    margin:-4px 5px 0 0;
}
.user_header,.user_footer{
    padding: 12px 12px 0;
}
.user_header{
    text-align: center;
    background: rgb(0,127,123);
    height: 175px;
}
.user_header,.user_header>img{
    box-sizing: border-box;
}
.user_header>img{
    width: 90px;
    height: 90px;
    border-radius:50%;
    border: 3px solid rgba(255,255,255,.2);
}
.user_header>p{
    font-size: 17px;
    color: rgba(255,255,255,.8);
    margin: 10px 0;
}
.user_footer{
    background: #fff;
    display: flex;
    justify-content: space-between;
}
</style>
