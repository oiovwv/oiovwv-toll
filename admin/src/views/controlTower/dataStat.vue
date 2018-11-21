<template>
    <div class="main_container">
        <el-tooltip placement="top" content="返回顶部">
            <back-to-top :visibility-height="300" :back-position="1" transition-name="fade" />
        </el-tooltip>
    </div>
</template>
<script>
import BackToTop from '../../components/BackToTop'
export default {
    components:{
        BackToTop
    }
}
</script>
<style lang="scss" scoped>
.main_container{
    width: 100%;
    min-height: 2000px;
    // background: orange;
}
</style>
