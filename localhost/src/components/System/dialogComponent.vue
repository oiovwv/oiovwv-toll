<template>
    <div>
        <div class="user_info" v-show="isShowUserInfo" draggable="true">
          <div class="info_title">
            {{modal.title}}
            <span @click="closeDialog">×</span>
          </div>
          <div class="info_main">
            <slot name="main"></slot>
          </div>
          <div class="info_footer" v-show="modal.isShowFooter">
            <slot name="button"></slot>
          </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
      let moveEle=document.getElementsByClassName('user_info')[0]
      let dragging,mouseDownLeft,mouseDownTop
      document.addEventListener('mousedown',(e)=>{
        if(e.target==moveEle){
          dragging=true
          let moveEleRect=moveEle.getBoundingClientRect()
          console.log(moveEleRect)
          mouseDownLeft=e.clientX-moveEleRect.left
          mouseDownTop=e.clientY-moveEleRect.top
        }
      })

      document.addEventListener('mouseup',(e)=>{
        dragging=false
      })
      
      document.addEventListener('mousemove',(e)=>{
        if(dragging){
          let moveX=e.clientX-mouseDownLeft,moveY=e.clientY-mouseDownTop
          moveEle.style.left=moveX+'px'
          moveEle.style.top=moveY+'px'
        }
      })
    },
    props:{
        modal:{
            type:Object
        },
        isShowUserInfo:{
            type:Boolean
        }
    },
    methods:{
      closeDialog(){
          this.$emit('closeEdit')
          this.$emit('closeDetail')
          this.$emit('closePermission')
      }
    }
}
</script>
<style scoped>
.user_info{
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 520px;
  height: 520px;
  background: #ffffff;
  z-index: 1000;
  box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  border-radius: 3px;
}
.info_title{
  font-size: 14px;
  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#edf5f8), to(#bdc6cd));
  height: 33px;
  line-height: 35px;
  font-weight: bold;
  padding: 0 10px;
}
.info_title>span{
  font-size: 18px;
  float: right;
  cursor: pointer;
}
.info_title>span:hover{
  color: #85140E;
}
.info_main{
  padding:15px;
  height: 441px;
  width: 100%;
  box-sizing: border-box;
}
.info_footer{
  padding: 8px;
  background: #F6F6F6;
  border-top: 1px solid #DADEE5;
  text-align: right;
}
.info_footer .el-button{
  color: #fff;
  background: #4CBAB4;
  border-color: #4CBAB4;
}
</style>
