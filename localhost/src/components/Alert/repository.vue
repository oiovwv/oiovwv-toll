<template>
    <div>
        <el-button @click="go">去仓储可视化界面</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        go(){
            this.$router.push('/display')
        }
    }
}
</script>
