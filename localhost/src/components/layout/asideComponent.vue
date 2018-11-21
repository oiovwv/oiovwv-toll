<template>
    <div class="scroll">
        <el-row>
            <el-col>
                <h5 v-show="!isCollapse">功能导航</h5>
                <el-menu :unique-opened="isUniqueOpened" :collapse="isCollapse">
                    <el-submenu :index="item.GroupName" v-for="(item,index) in navMenu" :key="index">
                        <template slot="title">
                            <i class="iconfont" :class="item.GroupICO"></i>
                            <span v-show="!isCollapse">{{item.GroupName}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item :index="subItem.ItemName" v-for="(subItem,i) in item.GroupItems" :key="i">
                                <i class="iconfont" :class="subItem.ItemICO"></i>
                                <router-link :to='subItem.ItemPath'>{{subItem.ItemName}}</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>    
</template>
<script>
import Bus from '../../utils/bus.js'
import {getMenu} from '../../utils/api/index'
export default {
    data(){
        return {
            isCollapse:false,
            isUniqueOpened:true,
            navMenu:[]
        }
    },
    created(){
       
    },
    mounted(){
        Bus.$on('val',data=>{
            this.isCollapse=!data
        })
        getMenu().then(res=>{
            this.navMenu=res.data
        })
    },
    watch:{
        '$route.path':function(newVal,oldVal){
            if (newVal!='/toll') {
                this.$emit('routeChangeToggle')
                this.isCollapse=true
            }
        }
    }
}
</script>
<style scoped>
.iconfont{
    font-size: 14px;
    margin-right: 5px;
}
.scroll{
    overflow: hidden;
    width: 230px;
}
.el-menu-item-group .iconfont{
    position: relative;
    top: 1px;
}
.el-menu-item.is-active{
    color:rgb(0,127,123);
}
</style>
