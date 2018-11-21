<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
            <div class="title-container">
                <h3 class="title">{{ $t('login.title') }}</h3>
                <lang-select class="set-language"/>
            </div>
            <el-form-item prop="username">
                <span class="svg-container">
                    <svg-icon icon-class="user" />
                </span>
                <el-input
                v-model="loginForm.username"
                :placeholder="$t('login.username')"
                name="username"
                type="text"
                auto-complete="on"
                />
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" />
                </span>
                <el-input
                :type="passwordType"
                v-model="loginForm.password"
                :placeholder="$t('login.password')"
                name="password"
                auto-complete="on"
                @keyup.enter.native="handleLogin" />
                <span class="show-pwd" @click="showPassword">
                    <svg-icon icon-class="eye" />
                </span>
            </el-form-item>

            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
                {{ $t('login.logIn') }}
            </el-button>    
        </el-form>
  </div>
</template>
<script>
import LangSelect from '../../components/LangSelect/index'
import zh from '../../utils/lang/zh.js'
import en from '../../utils/lang/en.js'
import {translateMessage} from '../../utils/index.js'
export default {
    name:'login',
    data(){
        let validateUsername=(rule, value, callback)=>{
            // if(!value){
            //     callback(new Error('Please enter the correct user name'))
            // }else{
            //     callback()
            // }
            
            if(!value){
                translateMessage(zh.message.username,en.message.username)
            }else{
                callback()
            }
        }
        let validatePassword=(rule, value, callback)=>{
            // if(!value){
            //     callback(new Error('Please enter the correct user password'))
            // }else{
            //     callback()
            // }
            if(!value){
                translateMessage(zh.message.password,en.message.password)
            }else{
                callback()
            }
        }
        return {
            loginForm:{
                username:'',
                password:''
            },
            loginRules:{
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password',
            loading:false,
            redirect:undefined
        }
    },
    watch:{
        $route:{
            handler: function(route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    methods:{
        handleLogin(){
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
                        this.loading = false
                        this.$router.push({ path: this.redirect || '/' })
                    }).catch(() => {
                        this.loading = false
                    })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        showPassword(){
            if(this.passwordType=='password'){
                this.passwordType='text'
            }else{
                this.passwordType='password'
            }
        }
    },
    components:{
        LangSelect
    }

}
</script>
<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .el-input{
        width: 85%;
    }
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 520px;
        max-width: 100%;
        padding: 35px;
        margin: 120px auto;
        .el-form-item{
            border:1px solid rgba(255,255,255,.1);
            background: rgba(0,0,0,.1);
            border-radius: 3px;
            /deep/ .el-form-item__content{
                line-height: 36px;
            }
            /deep/ .el-input__inner{
                background-color:transparent;
                border: none; 
                color: #fff;
                height: 46px;
            }
        }  
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
    .title-container {
        position: relative;
        .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
        .set-language {
            color: #fff;
            position: absolute;
            top: 5px;
            right: 0px;
        }
    }
    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
    .thirdparty-button {
        position: absolute;
        right: 35px;
        bottom: 28px;
    }
}
</style>
