<template>
  <div class="container">
    <div class="login_box">
      <div class="login_title">Toll Web Platform</div>
      <div class="login_content">
        <el-form ref="loginForm" :model="loginForm" :rules="rules">
          <p class="login_content_subtitle">User Login</p>
          <el-form-item prop="userName">
            <el-input placeholder="UID" v-model="loginForm.userName">
              <i slot="suffix" class="el-input__icon el-icon-edit"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="PWD" v-model="loginForm.password" 
            @keyup.enter.native="doLogin">
            <i slot="suffix" class="el-input__icon el-icon-view"></i>
            </el-input>
          </el-form-item>
          <div class="login_content_btn">
            <el-checkbox v-model="loginForm.isEKP">Use EKP Account</el-checkbox>
            <el-button size="medium" @click="doLogin">Login</el-button>
          </div>
          <div class="login_content_subtitle_box">
            <p class="login_content_subtitle">I forgot my password</p>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import {UserLogin,UserInfo} from '../../utils/api/index'
export default {
  name: 'Login',
  data () {
    let checkId=(rule, value, callback)=>{
      if(!value){
        this.$notify.error({
          title: '错误',
          message: 'User Id不能为空！',
          duration: 2500,
          showClose:false
        });
      }else{
        callback()
      }
    }
    let checkPwd=(rule, value, callback)=>{
      if(!value){
        this.$notify.error({
          title: '错误',
          message: '密码不能为空！',
          duration: 2500,
          showClose:false
        });
      }else{
        callback()
      }
    }
    return {
      loginForm:{
        userName:'',
        password:'',
        isEKP:false
      },
      rules:{
        userName: [{ validator: checkId,trigger: 'blur' }],
        password:[{ validator: checkPwd, trigger: 'blur' }]
      }
    }
  },
  methods:{
    doLogin(){
      this.$refs['loginForm'].validate(valid=>{
        if(valid){
          UserLogin(this.loginForm.userName.trim(),this.loginForm.password,this.loginForm.isEKP)
          .then(res=>{ 
            // let cookieOvertime =  new  Date(new Date().getTime()+30000)
            Cookie.set('Token',res.data.token)
            // Cookie.set('ASP.NET_SessionId',res.data.ASPNET_SessionId)
            Cookie.set('userName',res.data.name)
            this.$router.push('/toll')
          }).catch(error=>{
            console.log(error)
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.container{
  height: 100%;
  background: #d2d6de;
}
.login_box{
  width: 360px;
  margin: 0 auto;
  padding-top: 7%;
  text-align: center;
}
.login_title{
  font-size: 32px;
  color:#444;
  font-weight: 300;
  margin-bottom:20px; 
}
.login_content{
  padding: 20px;
  background: #fff;
}
.login_content_subtitle{
  font-size: 14px;
  margin:0;
  padding: 0 0 20px 0;
}
.el-form-item{
  margin-bottom: 0;
}
.el-input{
  margin-bottom: 15px;
}
.login_content_subtitle,
.el-checkbox__input.is-checked+.el-checkbox__label{
  color: #666;
}
.el-button,.el-button:hover{
  color:#fff;
}
.el-button{
  background: #007f7b;
}
.el-button:hover{
  background: #0ab9b4;
  border-color: #0ab9b4;
}
.login_content_btn /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, 
.login_content_btn /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background: #007f7b;
}
.login_content_btn /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner,
.login_content_btn /deep/ .el-checkbox__inner:hover{
  border-color: #007f7b;
}
.login_content_btn /deep/ .el-checkbox__input.is-checked+.el-checkbox__label,
.login_content_subtitle_box .login_content_subtitle{
  color: #007f7b;
}
.login_content_btn{
  display: flex;
  justify-content: space-between;
  line-height: 35px;
}
.login_content_subtitle_box{
  text-align: left
}
.login_content_subtitle_box .login_content_subtitle{
  margin-top:10px;
  padding:0;
}
</style>
