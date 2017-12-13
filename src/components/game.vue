<template>
	<div>
		<div id="gamee">
			<ul>
	   	  	    <!-- 声明式跳转 -->
	   	  		<router-link tag="li" to="/game/lol" activeClass="wfactive">英雄联盟</router-link>
	   	  		<router-link tag="li" to="/game/wzny" activeClass="wfactive">王者荣耀</router-link>
	   	  		<router-link tag="li" to="/game/zjgame" activeClass="wfactive">主机游戏</router-link>
	   	  		<router-link tag="li" to="/game/lushi" activeClass="wfactive">炉石传说</router-link>
	   	  	</ul>
	   	  	<i calss="iconfont icon-category"></i>
		</div>
		<router-view></router-view>
	</div>
	
</template>

<script>
export default {
	name:'game',
  data () {
    return {

    }
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css">
	
</style>
<style lang="scss" scoped>
	#gamee{
		width: 100%;
		    height: 1.75rem;
		    overflow: hidden;
		    position: relative;
		    background-color: #f2f2f2;
		    ul{
		    	display:block;
		    	padding: 0 2rem 0 .25rem;
		    	.wfactive{
						color: #1cd39b;
						border-color: #1cd39b;
		    	}
		    	li{
		    		width: 25%;
		    		float: left;
		    		line-height: 1.75rem;
		    		text-align: center;
		    		font-size: .55rem;
		    		list-style:none;
		    		border-bottom: 1px solid; 
		    		a{
		    			display:block;
		    			color:#666;
		    		}
		    	}
		    }
		    i{
		    	position: absolute;
		    	right: 0;
		    	top: 0;
		    }
	}
</style>
