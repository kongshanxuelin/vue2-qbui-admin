<template>
    <div class="header">
        <div><img class="logo" src="http://h5.sumslack.com/logo57.png">&nbsp;&nbsp;后台管理系统</div>
        <div class="user-info">
            {{username}}
            <a href="#" @click="logout">退出</a>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            logout() {
                localStorage.removeItem('ms_username')
                this.$router.push('/login');
            }
        }
    }
</script>
<style scoped>
  .header{
    margin:5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header .title {
    padding:20px;
  }
  .logo {
  	  border-radius: 50%;
      width:32px;
      height:32px;
  }
</style>
