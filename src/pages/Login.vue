<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
          
                <div class="form-item">
                    <input class="sl-input login-input" v-model="username" placeholder="username" />
                </div>
                <div  class="form-item">
                    <input class="sl-input login-input" v-model="pwd" type="password" placeholder="password" />
                </div>
                <div class="login-btn form-item">
                    <button class="sl-btn primary" style="width:121px;" @click="submitForm" type="primary">登录</button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 请使用正确的账号登录</p>
         
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                username:"",
                pwd:""
            }
        },
        methods: {
            submitForm() {
                //这里校验用户名和密码
                localStorage.setItem('ms_username',this.username);
                this.$router.push('/home');
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        
    }
    .login-input {
        height: 35px;
        line-height: 35px;
        width:90%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #d0d0d0;
    }
    .form-item {
        margin-bottom: 10px;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:240px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #172422;
        border:1px solid #193d37;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>