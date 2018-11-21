<template>
    <div class="container">
        <el-container>
            <el-header>
                <header-component @toggle="toggleNavMenu" :isCollapse="collapse"></header-component>
            </el-header>
            <el-container>
                <el-aside :class="collapse?'active':''" width="230px">
                    <aside-component ref="nav" @routeChangeToggle="navClose"></aside-component>
                </el-aside>
                <el-container>
                    <el-main :class="collapse?'active':''">
                        <main-component></main-component>
                    </el-main>
                    <el-footer>
                        <footer-component></footer-component>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div> 
</template>
<script>
import headerComponent from './headerComponent'
import asideComponent from './asideComponent'
import mainComponent from './mainComponent'
import footerComponent from './footerComponent'

export default {
    name:'Home',
    data(){
        return {
            collapse:false
        }
    },
    mounted() {
        document.getElementsByClassName('el-aside')[0].style.height=document.body.clientHeight-80+'px'
        document.getElementsByClassName('el-main')[0].style.height=document.body.clientHeight-80+'px'
    },
    components:{
        headerComponent,asideComponent,mainComponent,footerComponent
    },
    methods:{
        toggleNavMenu(){
            this.collapse=!this.collapse       
        },
        navClose(){
            this.collapse=true
        }
    }
}
</script>
<style>
html,body{
    background: #fff;
}
.container,.el-container{
    height: 100%;
}
h5{
    margin: 15px;
    text-align: left;
}
.el-header{
    background-color: rgb(0,127,123);
    color: #fff;
    height: 40px !important;
    padding: 0;
}
.el-aside {
    color: #333;
    text-align: center;
    overflow: hidden;
}
.el-aside>div,.el-aside>div>.el-row{
    height: 100%;
}
.el-aside.active{
    width: 50px !important;
}
.el-aside.active .scroll{
    width: 70px;
}
.el-aside.active .el-submenu__title{
    padding-left: 12px !important;
}
.el-menu--collapse{
    width: 50px;
}
.el-menu{
    border: none;
}
.el-submenu__title{
    height: 42px;
    line-height: 42px;
    border-left: 3px solid transparent;
    padding-left: 15px !important;
}
.el-submenu__title:hover{
    background: rgb(208, 208, 208);
    border-left-color: rgb(0,127,123);
    color:#fff; 
}
.el-submenu .el-menu-item{
    height: 40px;
    line-height: 40px;
    padding-left: 30px !important;
}
.el-submenu__title,.el-menu-item{
    text-align: left;
}
.el-menu-item-group__title{
    padding: 0;
}
.el-menu-item *{
    text-decoration: none;
    color: #303133;
}

.logo_box,.logo_box.active,.el-aside,.el-aside.active{
    transition: width .3s ease-in-out; 
}
.el-main {
    color: #333;
    padding:0;
    background: #ecf0f5;
}
.main_box{
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 10px;
}
.el-main>div,.el-main>div>div{
    height: 100%;
    box-sizing: border-box;
}
.el-footer{
    height: 40px !important;
    line-height: 40px;
}
.el-menu--vertical .el-menu-item{
    height: 42px;
    line-height: 42px;
}
.el-menu--popup-right-start{
    margin-left: 2px !important;
}

</style>
