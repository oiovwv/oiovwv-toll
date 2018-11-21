<template>
    <div>
        <el-row>
          <el-col :span="24">
                <div class="content_main shadow_box">
                    <div>查询结果</div>
                    <div class="result_box">
                        <slot></slot>
                    </div>
                </div>
          </el-col>
        </el-row>
    </div>    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted() {
        let bodyHeight=document.body.clientHeight
        document.getElementsByClassName('content_main')[0].style.height=bodyHeight-100-30-60-31.77-43.33-18.98+'px'
        document.getElementsByClassName('result_box')[0].style.height=document.getElementsByClassName('content_main')[0].clientHeight-70+'px'
    }
}
</script>
<style scoped>
.content_main{
  margin-top: 3px;
  border-color:#d2d6de;
  height: 650px;
  margin-bottom: 18px;
  padding-bottom: 15px;
  overflow: hidden;
}
.content_main>div:first-child,.content_main>div:last-child{
    padding: 10px;
}
.content_main>div:first-child{
  font-size: 18px;
  height: 25px;
  line-height: 25px;
  border-bottom: 1px solid #f4f4f4;
}
.result_box{
    overflow-y: scroll;
}
</style>
