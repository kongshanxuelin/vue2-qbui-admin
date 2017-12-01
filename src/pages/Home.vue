<template >
  <div>
  	<h2>项目说明</h2>
    <div class="m20">
    		这是一个包含登录的后台单页面管理系统，<a href="http://vueqbui.sumslack.com/" target="_blank">在线Demo</a>
    </div>
  	<h2>使用步骤</h2>    
    <div>
    	<ul>
    		<li>
    			<span class="sl-label2">拉取原型代码：</span><span class="code">git clone https://github.com/kongshanxuelin/vue2-qbui.git</span>
    		</li>
    		<li><span class="sl-label2">安装依赖：</span><span class="code">npm i</span></li>
    		<li><span class="sl-label2">运行：</span><span class="code">npm run dev</span></li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sumslack_label',
  data(){
  	return {
  	
  	}
  },
  methods:{
	}
 }
</script>

<style lang="less" scoped>
  h2 {
  	color:orange;
  	font-size: 16px;
  }
	div{
	  margin:20px;
	}
	ul {
		margin:0;
		padding:0;
	}
	li{
		list-style-type: none;
		margin-bottom: 10px;
	}
	.code {
		display: inline-block;padding:4px;background-color: #193d37;
	}
</style>
