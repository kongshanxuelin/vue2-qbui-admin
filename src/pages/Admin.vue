<template>
<div class="wrapper">
    <v-head></v-head>
    <div class="container">
        <div v-if="menuIcon == 'left'" class="sliderbar">
            <v-sidebar></v-sidebar>
        </div>    
        <div @click="isShowLeftPanel" class="splitbar">
	    	<i style="margin:0px;font-size:14px" :class="'icon sumscope-icon icon-caret-'+menuIcon"></i>
	    </div>
        <div class="main" :style="'height:'+height+'px'">
            <transition name="slide-right" mode="out-in"><router-view class="Router"></router-view></transition>
        </div>    
    </div>        
</div>
</template>
<script>
    import vHead from '../inc/Header.vue';
    import vSidebar from '../inc/Sidebar.vue';
    export default {
        data(){
            return {
                height:400,
                transitionName: 'slide-right',
                menuIcon:'left'
            }
        },
        components:{
            vHead, vSidebar
        },
        created(){
            this.height = window.document.body.clientHeight - 120;
        },
        methods:{
            isShowLeftPanel(){
                if(this.menuIcon === "left"){
                    this.menuIcon = "right";
                }else{
                    this.menuIcon = "left";
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .container{
        display: flex;
        flex-direction: row;
    }
    .sliderbar {
        min-width: 160px; 
        width:160px;
        border: 1px solid rgb(25, 61, 55);
    }
    .splitbar {
        height:100%;
        width:16px;
        min-width:16px;
        padding-left:3px;
        margin:0;
        align-self: center;
    }
    .main {
        flex:1;display: flex;
        flex-direction: column;
        margin-left:2px;
        padding:10px;
        border:1px solid #193d37;
        overflow-y:auto;
        overflow-x:hidden;
    }
	.active{
	    background:#ff9200;
	}
	.Router {
	    width: 100%;
	    transition: all .4s ease;
    }
	.slide-left-enter,
	.slide-right-leave-active {
	     opacity: 0;
	    -webkit-transform: translate(0, 100%);
	    transform: translate(0, 100%);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
	     opacity: 0;
	    -webkit-transform: translate(0, -100%);
	    transform: translate(0, -100%);
	}
</style>