<template>
	<div>
		<div id="gamee">
			<ul>
	   	  	    <!-- 声明式跳转 -->
	   	  		<router-link tag="li" to="/yule/xinxiu" activeClass="wfactive">熊猫星秀</router-link>
	   	  		<router-link tag="li" to="/yule/ecy" activeClass="wfactive">二次元</router-link>
	   	  		<router-link tag="li" to="/yule/ms" activeClass="wfactive">美食</router-link>
	   	  	</ul>
	   	  	<i calss="iconfont icon-category"></i>
		</div>
		<router-view></router-view>
	</div>
	
</template>

<script>
export default {
	name:'yule',
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
		    	padding: 0 .25rem;
		    	.wfactive{
						color: #1cd39b;
		    	}
		    	li{
		    		width: 33.3%;
		    		float: left;
		    		line-height: 1.75rem;
		    		text-align: center;
		    		font-size: .55rem;
		    		list-style:none;
		    		border-bottom: 1px solid; 
		    		a{
		    			display:block;
		    			color:#666;
		    			font-size: .55rem;
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
