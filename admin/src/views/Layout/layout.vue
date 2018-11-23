<template>
    <div class="app-wrapper" :class="classObj">
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
        <sidebar class="sidebar-container"/>
        <div class="main-container">
            <el-scrollbar>
                <nav-bar/>
                <tags-view/>
                <app-main/>
            </el-scrollbar>
            
        </div>
    </div>    
</template>
<script>
import {NavBar,AppMain,TagsView,Sidebar} from './components/index.js'
import ResizeMixin from './mixin/ResizeHandler.js'
export default {
    name:'layout',
    components:{
        Sidebar,NavBar,AppMain,TagsView
    },
    mixins:[ResizeMixin],
    computed:{
        classObj(){
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === 'mobile'
            }
        },
        sidebar(){
            return this.$store.state.app.sidebar
        },
        device(){
            return this.$store.state.app.device
        }
    },
    methods:{
        handleClickOutside(){
            this.$store.dispatch('closeSidebar', { withoutAnimation: false })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixin.scss";
    .main-container,.el-scrollbar{
        height: 100%;
    }
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
