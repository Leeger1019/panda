<template>
	<header>
		<div class="left">
			<a>
				<img src="https://i.h2.pdim.gs/c1ce37e223711ac773cf78cd9410556a.png" alt="">
			</a>	
		</div>
		<ul>
			<router-link to="/home" tag="li" activeClass="wfactive">首页<span></span></router-link>
			<router-link to="/game/lol" tag="li" activeClass="wfactive">游戏<span></span></router-link>
			<router-link to="/yule/xinxiu" tag="li" activeClass="wfactive">娱乐<span></span></router-link>
		</ul>
		<i class="icon iconfont icon-search"></i>	
	</header>
</template>

<script>
export default {
	name:'navbar',
  data () {
    return {

    }
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css">
	
</style>
<style lang="scss" scoped>
	header{
		background-color: #fff;
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		margin-bottom: 2px;
		height: 1.75rem;
		overflow: hidden;
		line-height:1.75rem;
		.left{
			float: left;
			left: .5rem;
				a{
				transform: translateY(-50%);
					img{
					width: 2rem;
					height:1.2rem;
					}
				}
			}
			ul{	
				overflow:hidden;	
				padding-left:4.25rem;
				padding-right: 3.5rem;
				font-size:.65rem;
				display: block;
				li{
					float:left;
					width:33%;
					text-align: center;
					list-style:none;
					display:block;
					position:relative;
					span{
						display:inline-block;
						width:100%;
						height:2px;
						position:absolute;
						bottom:0;
						left: 0;
					}
				}
				.wfactive{
					color: #1cd39b;
					span{background-color:#1cd39b;}
				}
			}
			i{
				width:1.75rem;
				height:1.75rem;
				float:right;
				right:0;
			}
		}
</style>