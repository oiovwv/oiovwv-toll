<template>
    <div class="header_box">
        <div class="logo_box" :class="isCollapse?'active':''">
            <div v-if="isCollapse">Toll</div>
            <img src="../../assets/images/logo.png" alt="" v-else>
        </div>
        <div class="el-icon-menu toggle" @click="toggleMenu"></div>
        <div class="userinfo_box">
            <userInfoModal :uname="userName"></userInfoModal>
        </div>
    </div>
</template>
<script>
import userInfoModal from '../common/userInfoModal'
import Bus from '../../utils/bus.js'
import Cookie from 'js-cookie'
export default {
    data(){
        return {

        }
    },
    computed:{
        userName(){
            return Cookie.get('userName')
        }
    },
    props:{
        isCollapse:{
            type:Boolean
        }
    },
    mounted() {
        
    },
    components:{
        userInfoModal
    },
    methods:{
        toggleMenu(){
            this.$emit('toggle')
            Bus.$emit('val',this.isCollapse)
        }
    }
}
</script>
<style scoped>
.header_box{
    overflow: hidden;
    height: 40px;
}
.logo_box{
    width: 230px;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    float: left;
}
.logo_box.active{
    width:50px;
}
.logo_box>img{
    width: 115px;
    margin-top: 3px;
}
.logo_box>div{
    height: 100%;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
}
.logo_box:hover,.toggle:hover{
    background: rgb(76,186,180);
    cursor: pointer;
}
.toggle{
    float: left;
    height: 40px;
    padding:0 15px;
    line-height: 40px;
}
.userinfo_box{
    float: right;
    height: 40px;
}
</style>
