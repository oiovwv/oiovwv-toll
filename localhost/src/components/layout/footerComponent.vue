<template>
    <div class="copyright">
        <strong>Copyright © {{year}} 拓领环球物流（中国）有限公司</strong>
        <b>Version  1.0.1</b>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    computed:{
        year(){
            return new Date().getFullYear()
        }
    }
}
</script>

