<template>
    <div class="container">
        <div v-for="(item,index) in menuList" style="cursor:pointer;width:100%;">
            <div class="tip" @click="showApiList(index)">{{item.title}}</div>
            <div v-if="item.items && item.items.length>0 && (index==cur_selected)" 
                class="api-item" 
                @click="callApi(api.link)"  
                v-for="(api,index2) in item.items">
                <div class="api-item-text">{{api.title}}</div> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cur_selected:0,
                cur_active:0,
                menuList: [
                    {title:"首页",link:"/home"},
                    {
                        title:"功能菜单",items:[
                            {link:"/page1",title:"页面1"},
                            {link:"/page2",title:"页面2"}
                        ]
                    },
                    {
                        title:"功能菜单3",items:[
                            {link:"/page1",title:"页面1"}
                        ]
                    }
                ]
            }
        },
        computed:{
           
        },
        methods:{
            showApiList(vv){
                this.cur_selected = vv;
                if(this.menuList[vv].link && this.menuList[vv].link!=""){
                    this.$router.push({path:this.menuList[vv].link});
                }
            },
            callApi(link){
                this.$router.push({path:link});
            }
        }
    }
</script>

<style lang="less" scoped>
.container{
    display: flex;
    flex-direction: column;
    & .api-item{
        display:flex;
	    flex-direction: row;
	    align-content: space-between;
	    background: #172422;
    }
    & .api-item:nth-child(odd){
    	background: #121a19;
    }
    & .api-item:nth-child(even){
    	background: #172422;
    }
    & .api-item-text{
	    flex:1;
	    height: 32px;
	    color:#ffebc8;
	    line-height: 32px;
	    padding-left:20px;
    }
    & .active{
        background: #ff9200;
        color:#1a1a1a;
    }
    & .tip {
	    padding: 5px 0px 5px 10px;
		cursor: pointer;
	    justify-content: center;
	    background-color: #FFFFFF;
	    color:#ffda9a;
	    font-weight: bold;
	    background-image:linear-gradient(to top,#193d37,#193d37);
    }
  }
    
</style>
