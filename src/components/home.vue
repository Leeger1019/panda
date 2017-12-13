<template>
<div>
	<swipe class="my-swipe" id="slides">
		<swipe-item v-for="data in looplist" class="item">
		  	<img :src="data.bigimg"/>
		</swipe-item>
	</swipe> 
	<div id="hot">
		<h1><span></span>热门<span></span></h1>
		<ul>
			<li class="item1" v-for="data in datalist">
				<div class="cname">
					{{data.classification.cname}}
				</div>
				<img :src="data.pictures.img"/>
				<h2 class="title">{{data.name}}</h2>
				<div class="info">
					<div class="nickName">{{data.userinfo.nickName}}</div>
					<div class="person_num"><i class="iconfont icon-account">：{{data.person_num}}</i></div>

				</div>
			</li>
		</ul>
	</div>
	<div id="lol">
		<h1><span></span>英雄联盟<span></span></h1>
		<ul>
			<li class="item2" v-for="data in lollist">
				<img :src="data.pictures.img"/>
				<h2 class="title">{{data.name}}</h2>
				<div class="info">
					<div class="nickName">{{data.userinfo.nickName}}</div>
					<div class="person_num"><i class="iconfont icon-account">：{{data.person_num}}</i></div>

				</div>
			</li>
		</ul>
	</div>
	<div id="lushi">
		<h1><span></span>炉石传说<span></span></h1>
		<ul>
			<li class="item3" v-for="data in lollist">
				<img :src="data.pictures.img"/>
				<h2 class="title">{{data.name}}</h2>
				<div class="info">
					<div class="nickName">{{data.userinfo.nickName}}</div>
					<div class="person_num"><i class="iconfont icon-account">：{{data.person_num}}</i></div>

				</div>
			</li>
		</ul>
	</div>
	<div id="zhuji">
		<h1><span></span>主机游戏<span></span></h1>
		<ul>
			<li class="item4" v-for="data in zhujilist">
				<img :src="data.pictures.img"/>
				<h2 class="title">{{data.name}}</h2>
				<div class="info">
					<div class="nickName">{{data.userinfo.nickName}}</div>
					<div class="person_num"><i class="iconfont icon-account">：{{data.person_num}}</i></div>

				</div>
			</li>
		</ul>
	</div>
	<div id="dnf">
		<h1><span></span>DNF<span></span></h1>
		<ul>
			<li class="item5" v-for="data in dnflist">
				<img :src="data.pictures.img"/>
				<h2 class="title">{{data.name}}</h2>
				<div class="info">
					<div class="nickName">{{data.userinfo.nickName}}</div>
					<div class="person_num"><i class="iconfont icon-account">：{{data.person_num}}</i></div>

				</div>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	import "vue-swipe/dist/vue-swipe.css";
	import { Swipe, SwipeItem} from 'vue-swipe';
	import { Indicator } from 'mint-ui';
	export default {
		name:'home',
		  data () {
		    return {
		    	looplist:[],
		    	datalist:[],
		    	lollist:[],
		    	lushilist:[],
		    	zhujilist:[],
		    	dnflist:[]
		    	}
	  		},
		  mounted(){  
		  		Indicator.open('Loading...');
  				fetch("/ajax_rmd_ads_get?__plat=h5").then(res=>res.json()).then(res=>{
  					this.looplist = res.data;
  				}),
  				fetch("/ajax_get_live_list_by_multicate?hotroom=1&__plat=h5").then(res=>res.json()).then(res=>{
  					console.log(res.data[0].items);
  					this.datalist = res.data[0].items;
  					this.lollist = res.data[1].items;
  					this.lushilist = res.data[2].items;
  					this.zhujilist = res.data[3].items;
  					this.dnflist = res.data[4].items;
  					Indicator.close();
  				})
  		 	},
		  components:{
		  	"swipe":Swipe,
		  	"swipe-item":SwipeItem
		  } 
	}
</script>

<style lang="scss">
	.my-swipe{
		width: 16rem;
	    height: 8rem;
	    overflow: hidden;
	    position: relative;
		.item{
			width:100%;
			height: 100%;
			img{
				width:100%;
				height:100%;
				}
			}
	}
	h1{
			display:block;
		    width: 100%;
		    height: 2rem;
		    margin: 0;
		    padding: 0;
		    position: relative;
		    line-height: 2rem;
		    overflow: hidden;
		    text-align: center;
		    font-size: .65rem;
		    color: #555;		    
		    span{
		    	display:inline-block;
		    	width:1rem;height:2px;
		    	margin-bottom: .2rem;
		    	margin-left: .6rem;margin-right: .6rem;
		    	background-color: #1cd39b;
		    }
		}
	#hot,#lol,#lushi,#zhuji,#dnf{
		ul{
			margin: 0;
    		padding: 0 .25rem 0 0;
    		li{
    			width: 7.625rem;
			    height: 5.3rem;
			    position: relative;
			    float: left;
			    margin-left: .25rem;
			    margin-bottom: .25rem;
			    font-size: .5rem;
			    list-style: none;
			    overflow:hidden;
			    .cname{
			    	height: .65rem;
			    	line-height: .65rem;
			    	padding: 0 .15rem;
			    	color: #fff;
			    	z-index: 2;
			    	position: absolute;
			    	left: 50%;
			    	top: 0;
			    	font-size: .45rem;
			    	-webkit-transform: translateX(-50%);
			    	-webkit-tap-highlight-color: rgba(255,0,0,0);
			    	-ms-transform: translateX(-50%);
			    	transform: translateX(-50%);
			    	text-shadow: 0 0 2px rgba(0,0,0,.2);
			    	background-color: #24c898;
			    }
			    img{
			    	width:100%;
			    	height:4.3rem;
			    }
			    h2{
			    	position:absolute;
			    	width: 100%;
			    	height: .9rem;
			    	line-height: .9rem;
			    	padding: 0 .25rem;
			    	font-size: .45rem;
			    	font-weight: 400;
			    	color: #fff;
			    	background-color: rgba(0,0,0,.5);
			    	position: absolute;
			    	left: 0;
			    	bottom: 1rem;
			    	overflow: hidden;
			    	text-overflow: ellipsis;
			    	white-space: nowrap;
			    	display:block;
			    }
			    .nickName{
			    		float:left;
			    	    width: 4.4rem;
			    	    overflow: hidden;
			    	    text-overflow: ellipsis;
			    	    white-space: nowrap;
			    }
			    .person_num{
			    		float:right;
			    	    font-size: .4rem;
			    	    color: #999;
			    	    height: 1rem;
			    	    overflow: hidden;
			    	    i{	
		    	   			 font-size: .4rem;	
			    	    	width:3rem;
			    	    	display:block;
			    	    	height: 1rem;
			    	    }
			    }
    		}
		}
	}
	#copyright{
		padding: .75rem 0 .25rem 0;
		    font-size: .45rem;
		    -webkit-transform: translate3d(0,0,0);
		    transform: translate3d(0,0,0);
		    line-height: 1.6;
		    color: #bcbccb;
		    text-align: center;
		    a{
		    	color: #bcbccb;
		    	outline: none;
	    	    text-decoration: none;
		    }
	}
	#tip-download {
	    width: 16rem;
	    height: 2rem;
	    overflow: hidden;
	    position: fixed;
	    left: 50%;
	    -webkit-transform: translateX(-50%);
	    -ms-transform: translateX(-50%);
	    transform: translateX(-50%);
	    bottom: 0;
	    z-index: 980;
	    background-color: rgba(0,0,0,.8);
	    .logo {
	        width: 2rem;
	        height: 1.2rem;
	        position: absolute;
	        left: .5rem;
	        top: 50%;
	        -webkit-transform: translateY(-50%);
	        -ms-transform: translateY(-50%);
	        transform: translateY(-50%);
	    }
	    .slogan {
	        font-size: .5rem;
	        line-height: 2rem;
	        padding-left: 3rem;
	        color: #fff;
	    }
	    .btn-download {
	        height: 1.35rem;
	        line-height: 1.35rem;
	        padding: 0 .25rem;
	        font-size: .5rem;
	        position: absolute;
	        right: .5rem;
	        top: 50%;
	        -webkit-transform: translateY(-50%);
	        -ms-transform: translateY(-50%);
	        transform: translateY(-50%);
	        border-radius: .15rem;
	        color: #fff;
	        background-color: #1cd39b;
	        outline: none;
	        text-decoration: none;
	    }
	}
</style>